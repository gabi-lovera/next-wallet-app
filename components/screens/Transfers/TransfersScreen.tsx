"use client";

import { BackButton } from "@/components/shared/BackButton";
import { TransferItem } from "@/components/shared/TransferItem";
import { useTransferStore } from "@/providers/transfer-store";
import { transfersSelector } from "@/selectors/transfer";
import { Calendar } from "lucide-react";

export default function TransfersScreen() {
  const latestTransfers = useTransferStore(transfersSelector);

  return (
    <>
      <div className="px-4 py-4 flex items-center">
        <BackButton />
        <div className="flex-1 text-xl text-center text-white font-medium">
          Transfers
        </div>
      </div>

      <div className="flex-1 bg-white rounded-t-3xl p-4 mt-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold">Latest Transfer</h2>
          <button className="text-gray-500">
            <Calendar size={20} />
          </button>
        </div>

        <div className="space-y-2">
          {latestTransfers.map((transfer) => (
            <TransferItem
              key={transfer.id}
              name={transfer.name}
              avatar={transfer.avatar}
              date={transfer.date}
              amount={transfer.amount}
            />
          ))}
        </div>
      </div>
    </>
  );
}
