"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function PayPalDonateButton() {
  const [step, setStep] = useState<"idle" | "input">("idle");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const isDonationSuccess = searchParams.get("donation") === "success";
  const [showSuccess, setShowSuccess] = useState(isDonationSuccess);

  useEffect(() => {
    if (!isDonationSuccess) return;
    router.replace("/");
    const timer = setTimeout(() => setShowSuccess(false), 5000);
    return () => clearTimeout(timer);
  }, [isDonationSuccess, router]);

  const handleDonate = async () => {
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount < 1) {
      setError("Enter at least $1.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-100 text-green-700 font-semibold text-base">
        Thank you for your donation!
      </div>
    );
  }

  if (step === "idle") {
    return (
      <button
        type="button"
        onClick={() => setStep("input")}
        className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#1B3A6B] text-white font-semibold text-base hover:bg-[#15305a] transition-colors"
      >
        Donate
      </button>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="flex items-center border-2 border-[#1B3A6B] rounded-full overflow-hidden px-4 py-2 bg-white">
          <span className="text-gray-500 font-semibold mr-1">$</span>
          <input
            type="number"
            min="1"
            step="1"
            placeholder="Amount"
            value={amount}
            autoFocus
            onChange={(e) => {
              setError("");
              setAmount(e.target.value);
            }}
            onKeyDown={(e) => e.key === "Enter" && handleDonate()}
            className="w-24 outline-none text-gray-800 font-semibold bg-transparent placeholder:text-gray-400 text-base"
          />
          <span className="text-gray-400 text-sm ml-1">USD</span>
        </div>

        <button
          type="button"
          onClick={handleDonate}
          disabled={loading}
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#1B3A6B] text-white font-semibold text-base hover:bg-[#15305a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {loading ? "..." : "Go"}
        </button>

        <button
          type="button"
          onClick={() => { setStep("idle"); setAmount(""); setError(""); }}
          className="text-gray-400 hover:text-gray-600 text-sm transition-colors"
        >
          Cancel
        </button>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
