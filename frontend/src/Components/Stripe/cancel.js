import React, { Component } from 'react';

class CancelPayement extends Component {
    render() {
        return (
            <section>
             <p>Le paiement n'a malheuresement pas pu être traité vous pouvez <a href="/#DonateComponent">réessayer</a></p>
         </section>
        );
    }
}

export default CancelPayement;