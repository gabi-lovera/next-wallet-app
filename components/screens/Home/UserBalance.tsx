"use client";

import { useState, useEffect } from "react";

export default function UserBalance() {
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("user-balance");

    if (stored) {
      setBalance(Number(stored));
    } else {
      const initialBalance = 2800;
      setBalance(initialBalance);
      localStorage.setItem("user-balance", initialBalance.toString());
    }

    setLoading(false);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-4 py-4">
      <div className="text-white text-sm">Your Balance</div>

      {loading ? (
        <div className="text-white text-lg animate-pulse my-2">Loading...</div>
      ) : (
        <div className="text-white text-3xl font-bold mt-2">$ {balance}</div>
      )}
    </div>
  );
}
