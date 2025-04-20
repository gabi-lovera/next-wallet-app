'use client";';

import { cn } from "@/lib/utils";
import {
  CreditCard,
  ArrowLeftRight,
  PiggyBank,
  Umbrella,
  LucideIcon,
} from "lucide-react";

type TransactionType = "Internet" | "Transfer" | "Cashin" | "Insurance";

interface TransactionItemProps {
  type: TransactionType;
  date: string;
  amount: number;
}

export function TransactionItem({ type, date, amount }: TransactionItemProps) {
  const isPositive = amount > 0;

  const TRANSACTION_ICONS: Record<TransactionType, LucideIcon> = {
    Internet: CreditCard,
    Transfer: ArrowLeftRight,
    Cashin: PiggyBank,
    Insurance: Umbrella,
  };

  const IconComponent = TRANSACTION_ICONS[type];

  return (
    <div className="flex items-center py-3">
      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 p-8 mr-3">
        <div className="rounded-full flex items-center justify-center p-2 bg-purple-500">
          <IconComponent className="text-white" size={16} />
        </div>
      </div>
      <div className="flex-1">
        <div className="font-medium">{type}</div>
        <div className="text-xs text-gray-500">{date}</div>
      </div>
      <div
        className={cn(
          "font-bold",
          isPositive ? "text-emerald-500" : "text-red-500"
        )}
      >
        {isPositive ? "+" : "-"} ${Math.abs(amount)?.toLocaleString()}
      </div>
    </div>
  );
}
