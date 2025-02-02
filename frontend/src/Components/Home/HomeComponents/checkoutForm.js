function CheckoutForm() {
    const [isPaymentLoading, setPaymentLoading] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const payMoney = async (e) => {
      e.preventDefault();
      if (!stripe || !elements) {
        return;
      }
      setPaymentLoading(true);
      const clientSecret = getClientSecret();
      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: "Faruq Yusuff",
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
    };
  
    return (
      <div
        style={{
          padding: "3rem",
        }}
      >
        <div
          style={{
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          <form
            style={{
              display: "block",
              width: "100%",
            }}
            onSubmit = {payMoney}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CardElement
                className="card"
                options={{
                  style: {
                    base: {
                      backgroundColor: "white"
                    } 
                  },
                }}
              />
              <button
                className="pay-button"
                disabled={isPaymentLoading}
              >
                {isPaymentLoading ? "Loading..." : "Pay"}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  