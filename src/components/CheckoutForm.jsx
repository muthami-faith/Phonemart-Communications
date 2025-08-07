import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export default function CheckoutForm({ onPayment }) {
  const stripe = useStripe();
  const elements = useElements();

  async function handleSubmit(e) {
    e.preventDefault();
    const card = elements.getElement(CardElement);
    const clientSecret = await fetch("/create-payment-intent").then(r => r.json()).then(j => j.clientSecret);
    const res = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card }
    });
    if (res.error) onPayment({ success: false, error: res.error.message });
    else if (res.paymentIntent.status === "succeeded") onPayment({ success: true });
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={{ style: { base: { fontSize: '18px' } }}} />
      <button type="submit" disabled={!stripe} className="mt-1 btn-outline-success      ">Pay</button>
    </form>
  );
}
