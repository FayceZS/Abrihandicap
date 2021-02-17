import React, { useState,Component } from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import {loadStripe} from '@stripe/stripe-js';


class DonateForm extends Component {
    constructor(){
        super();
        this.state = {
            amount : 0
        };
        

      
    }

    handleSubmitForm(event) {
        event.preventDefault();
      }
    

    handleChange = (event)=>{
        const value = event.target[event.target.type === "checkbox" ? "checked" : "value"];
        console.log(value)
     
        this.setState({
          amount: value
        });
      }




    render() {
        function CheckoutForm(){ 

            
            const [isPaymentLoading, setPaymentLoading] = useState(false);
            const stripe = useStripe();
            const elements = useElements();
            const amount = this.state;
            const payMoney = async (e) => {
              e.preventDefault();
              if (!stripe || !elements) {
                return;
              }
              setPaymentLoading(true);
              const clientSecret = fetch("http://localhost:5000/create-checkout-session", {
                       method: "POST",
                       headers: { 'Content-type': 'application/json' },
                       body : JSON.stringify({amount})
                     })
                       .then(function (response) {
                         return response.json();
                       })
                       .then(function (session) {
                        return stripe.redirectToCheckout({ sessionId: session.id });
          
                       })
                      .then(function (result) {
                        // If redirectToCheckout fails due to a browser or network
                         //error, you should display the localized error message to your
                         //customer using error.message.
                         if (result.error) {
                           alert(result.error.message);
                         }
                       })
                       .catch(function (error) {
                        console.error("Error:", error);
                     });;
              const paymentResult = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                  card: elements.getElement(CardElement),
                  billing_details: {
                    // name: "Faruq Yusuff",
                  },
                },
              });
              setPaymentLoading(false);
              if (paymentResult.error) {
                alert(paymentResult.error.message);
              } else {
                if (paymentResult.paymentIntent.status === "succeeded") {
                  alert("Success!");
                }
              }
            }};
            

            return(
            <div id="donateComponent" >
            <h2>Faites un don :</h2><br></br>
            <div id="amountInputContainer">
                <form id="amountInputForm" onSubmit = {console.log(CheckoutForm)}>
                <div>    
                    <input type="radio" name="amount" value='20' className="radioInput" onChange={this.handleChange} ></input>
                    <label for='amount' className = "amountValue">20€</label>
                </div>
          
                <div>
                    <input type="radio" name="amount" value='50' className="radioInput" onChange={this.handleChange} ></input>
                    <label for='amount' className = "amountValue">50€</label>
                </div>
          
                <div>
                    <input type="radio" name="amount" value='100' className="radioInput" onChange={this.handleChange} ></input>
                    <label for='amount' className = "amountValue">100€</label>
                </div>
                <input type="number" name="amount" placeholder="Montant libre" onChange={this.handleChange}></input>
                {/* onChange={event => this.handleChange(event) */}
                {this.state.amount > 0 ?  <button
                className="pay-button"
                disabled={CheckoutForm.isPaymentLoading}
              >
                {CheckoutForm.isPaymentLoading ? "Chargement..." : "Donner"}
              </button> : ''}
                </form>
                
            </div><br></br>
             <p>Grâce à la déduction fiscale votre don ne vous coûtera que <strong>{Math.round(this.state.amount / 3)}</strong> euros !</p>
             <p>Les enfants vous remercient :)</p>
          
                </div>
                );
    }
}

export default DonateForm;