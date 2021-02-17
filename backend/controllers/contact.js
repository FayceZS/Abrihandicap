const nodemailer = require("nodemailer");


const contactEmail = nodemailer.createTransport({
    host: "mail47.lwspanel.com",
    port: 587,
    auth: {
      user: "contact@abrihandicap.org",
      pass: "nF4_ea$D1E",
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

exports.sendMail = (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: "contact@abrihandicap.org",
      subject: "Contact Form Message",
      html: `<p>Name:</br> ${name}</p><p>Email: </br>${email}</p><p>Message:</br> ${message}</p>`,
    };
   contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "failed" });
      } else {
        res.json({ status: "sent" });
      }
    })
  
}

