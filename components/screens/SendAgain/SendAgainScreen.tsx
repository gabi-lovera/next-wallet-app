"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BackButton } from "@/components/shared/BackButton";
import { useTransferStore } from "@/providers/transfer-store";
import { Button } from "@/components/shared/Button";
import { recipientSelector } from "@/selectors/transfer";
import UserBalance from "@/components/screens/Home/UserBalance";
import { Input } from "@/components/shared/Input";
import { Textarea } from "@/components/shared/TextArea";
import { type Transfer } from "@/stores/transfer";
import ErrorMessage from "@/components/shared/ErrorMessage";

interface SendAgainScreenProps {
  contactId: string;
}

export function SendAgainScreen({ contactId }: SendAgainScreenProps) {
  const router = useRouter();
  const { addTransfer } = useTransferStore((state) => state);
  const getUserToTransfer = useTransferStore(recipientSelector);
  const recipient = getUserToTransfer(contactId);

  const [amount, setAmount] = useState<number>();
  const [notes, setNotes] = useState("");

  const [error, setError] = useState("");

  const validateTransferAmount = useCallback(
    (balance: number, transferAmount?: number): number | null => {
      if (!transferAmount || transferAmount <= 0) {
        setError("Please enter an amount greater than zero");
        return null;
      }

      if (transferAmount > balance) {
        setError("Amount exceeds your balance");
        return null;
      }

      return transferAmount;
    },
    []
  );

  const handleTransfer = () => {
    const stored = localStorage.getItem("user-balance");
    const balance = stored ? Number(stored) : 0;

    const transferAmount = validateTransferAmount(balance, amount);
    if (!transferAmount) return;
    const newBalance = balance - transferAmount;
    localStorage.setItem("user-balance", newBalance.toString());

    const newTransfer = createTransferObject(transferAmount);
    addTransfer(newTransfer as Transfer);

    router.push("/transfer-success");
  };

  const createTransferObject = useCallback(
    (transferAmount: number) => {
      return {
        ...recipient,
        login: { uuid: Date.now().toString() },
        date: new Date().toISOString(),
        amount: transferAmount,
        reference: (Math.floor(Math.random() * 1000) + 1).toString(),
        notes: notes,
      };
    },
    [recipient, notes]
  );

  if (!recipient) {
    return (
      <ErrorMessage message="Invalid user. Please return to the previous page." />
    );
  }

  return (
    <>
      <div className="px-4 py-4 flex items-center">
        <BackButton />
        <div className="flex-1 text-xl text-center text-white font-medium mr-6">
          Send again
        </div>
      </div>
      <UserBalance />
      <div className="flex-1 flex flex-col bg-white rounded-t-3xl p-4 mt-2">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
            <Image
              src={recipient?.picture?.thumbnail || "/placeholder.svg"}
              alt={recipient?.name.first || "User"}
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center font-medium">
            {recipient?.name.first} {recipient?.name.last}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-2xl font-medium mb-1">
              Set Amount
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="text-gray-500 text-lg">$</span>
              </div>
              <Input
                type="number"
                value={amount || ""}
                onChange={(e) => {
                  setAmount(Number(e.target.value));
                }}
                className="pl-8 text-xl font-bold h-14"
                placeholder="0"
              />
            </div>
            {!!error && (
              <div className="text-red-600 bg-red-100 p-4 rounded-md shadow-md">
                {error}
              </div>
            )}
          </div>

          <div>
            <label className="block font-medium mb-2">Notes</label>
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="What's this for?"
              className="resize-none"
            />
          </div>
        </div>

        <div className="mt-auto pt-6 mb-2">
          <Button onClick={handleTransfer} size="default" variant="primary">
            Proceed to Transfer
          </Button>
        </div>
      </div>
    </>
  );
}
