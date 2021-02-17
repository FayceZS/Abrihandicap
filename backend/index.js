const express = require("express");
const router = express.Router();
const contactRoute = require('./routes/contactRoute')
const stripe = require('stripe')('sk_test_51IJzCGDMUK2hIsF14tulKUZwQ8LUP3toRiAw6wgKpIasXKNSkZeai1jjXrDhDSupvU7qiMGgW55RxuEeAdjXZkfc00xKJFJ1PV');
const cors = require("cors");
const helmet = require('helmet');                 //On utilise helmet pour sécuriser les données headers
const rateLimit = require("express-rate-limit"); 
const { resolveHostname } = require("nodemailer/lib/shared");
const YOUR_DOMAIN = 'http://localhost:3000';
const app = express();




const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes 
    max: 100 // limite chaque IP à 100 requests par windowMs
  });

app.use(limiter);
app.use(helmet());
app.use(cors());
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => { 
  console.log(req.body.amount);
  const session = await stripe.checkout.sessions.create({
    
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'EUR',
          product_data: {
            name: 'Faire un don à ABRI',
            images: ['https://i.imgur.com/EHyR2nP.png'],
          },
          unit_amount_decimal: req.body.amount*100,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,});
  res.json({ id: session.id });
});


app.use('/contact',contactRoute);
app.listen(5000, () => console.log("Server Running"));



