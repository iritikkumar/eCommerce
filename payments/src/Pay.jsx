import StripeCheckout from "react-stripe-checkout";
import  {useEffect, useState} from "react"
import axios from "axios";
const KEY = "pk_test_51MQ3exSJMJym7GDQT41xwtNjAAuum2QEoaJJymREPGZncpr2tzJq6Fesf72zr8uOwg1S2Cvmi5XKCM5Xo7trODP400tuJlPdQU";

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null)
    const onToken = (token) => {
        console.log(token);
        setStripeToken(token);
    }
    useEffect(()=>{
        const makeRequest = async () => {
            try {
                const res = await axios.post("http://localhost:3000/api/checkout/payment", 
                    {
                        tokenId: stripeToken.id,
                        amount: 2000,
                    }
                ); 
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        stripeToken && makeRequest()
    }, [stripeToken])
  return (
    <div
        style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}
    >
    <StripeCheckout 
    name = "Ritik Shop"
    image = "https://i.pinimg.com/474x/6a/7a/a8/6a7aa88397ade85c6f2ad1e23d660e56.jpg"
    billingAddress
    shippingAddress
    description="Your total is $20"
    amount={2000}
    token = {onToken}
    stripeKey = {KEY}
    >
        <button style = {{
            border: "none",
            width: "120",
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "600",
            corsor: "pointer",

            }}
        >   
            Pay Now
            </button>
    </StripeCheckout>
    </div>
  );
};

export default Pay