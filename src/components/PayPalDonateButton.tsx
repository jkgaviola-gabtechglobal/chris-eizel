"use client";

import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// TODO: Replace with Sir Chris's real PayPal Live Client ID from developer.paypal.com
const PAYPAL_CLIENT_ID = "YOUR_PAYPAL_CLIENT_ID_HERE";

const isConfigured = PAYPAL_CLIENT_ID !== "YOUR_PAYPAL_CLIENT_ID_HERE";

function PayPalForm() {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const parsedAmount = parseFloat(amount);
  const isValid = !isNaN(parsedAmount) && parsedAmount >= 1;

  if (success) {
    return (
      <div className="text-center py-3 px-6 rounded-full bg-green-100 text-green-700 font-semibold text-base">
        Thank you for your donation! 🙏
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 w-full max-w-xs">
      <div className="flex items-center border-2 border-[#1B3A6B] rounded-full overflow-hidden px-4 py-2 bg-white">
        <span className="text-gray-500 font-semibold mr-1">$</span>
        <input
          type="number"
          min="1"
          step="1"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => {
            setError("");
            setAmount(e.target.value);
          }}
          className="flex-1 outline-none text-gray-800 font-semibold bg-transparent placeholder:text-gray-400 text-base"
        />
        <span className="text-gray-400 text-sm ml-1">USD</span>
      </div>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      {isValid ? (
        <PayPalButtons
          style={{
            layout: "horizontal",
            color: "blue",
            shape: "pill",
            label: "donate",
            height: 45,
            tagline: false,
          }}
          createOrder={(_data, actions) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  description: "Donation to Chris & Eizel Foundation",
                  amount: {
                    currency_code: "USD",
                    value: parsedAmount.toFixed(2),
                  },
                },
              ],
            });
          }}
          onApprove={async (_data, actions) => {
            if (actions.order) {
              await actions.order.capture();
              setSuccess(true);
            }
          }}
          onError={() => setError("Something went wrong. Please try again.")}
        />
      ) : (
        <button
          type="button"
          onClick={() => setError("Please enter a valid amount of at least $1.")}
          className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#1B3A6B] text-white font-semibold text-base hover:bg-[#15305a] transition-colors"
        >
          Donate
        </button>
      )}
    </div>
  );
}

export default function PayPalDonateButton() {
  if (!isConfigured) {
    return (
      <a
        href="#donate"
        className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#1B3A6B] text-white font-semibold text-base hover:bg-[#15305a] transition-colors"
      >
        Donate
      </a>
    );
  }

  return (
    <PayPalScriptProvider
      options={{
        clientId: PAYPAL_CLIENT_ID,
        currency: "USD",
        intent: "capture",
      }}
    >
      <PayPalForm />
    </PayPalScriptProvider>
  );
}
