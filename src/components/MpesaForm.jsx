import { useState } from "react";

export default function MpesaForm({ onInitiate, onResult }) {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    onInitiate();
    const res = await fetch("/api/mpesa/pay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, amount })
    });
    const data = await res.json();
    onResult(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Mpesa Phone" className="" value={phone} onChange={e => setPhone(e.target.value)} required />
      <input placeholder="Amount" className="" value={amount} onChange={e => setAmount(e.target.value)} required />
      <button type="submit" className="payment-button mt-1">Pay with M‑Pesa</button>
    </form>
  );
}
