"use server";

enum TransactionType {
  Internet = "Internet",
  Transfer = "Transfer",
  Cashin = "Cashin",
  Insurance = "Insurance",
}

interface Transaction {
  id: string;
  type: TransactionType;
  date: string;
  amount: number;
}

const transactions: Transaction[] = [
  {
    id: "1",
    type: TransactionType.Internet,
    date: "Mar 10, 2023 · 17:34",
    amount: -24000,
  },
  {
    id: "2",
    type: TransactionType.Transfer,
    date: "Yesterday · 18:12",
    amount: -600000,
  },
  {
    id: "3",
    type: TransactionType.Cashin,
    date: "Mar 23, 2023 · 18:12",
    amount: 260000,
  },
  {
    id: "4",
    type: TransactionType.Insurance,
    date: "April 23, 2023 · 11:28",
    amount: -100000,
  },
  {
    id: "5",
    type: TransactionType.Transfer,
    date: "Yesterday · 16:13",
    amount: -600000,
  },
];

export const getTransactions = async (): Promise<Transaction[]> => {
  // this would be an API call in a real app

  await new Promise((resolve) => setTimeout(resolve, 500));

  return transactions;
};
