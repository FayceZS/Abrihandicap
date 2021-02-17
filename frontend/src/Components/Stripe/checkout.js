import React, { Component } from 'react';

class Checkout extends Component {
    render() {
        return (
            
  
  <section>
    <div class="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div class="description">
        <h3>Stubborn Attachments</h3>
        <h5>$20.00</h5>
      </div>
    </div>
    <button type="button" id="checkout-button">Checkout</button>
  </section>
        );
    }
}

export default Checkout;