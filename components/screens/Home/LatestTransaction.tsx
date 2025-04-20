import { getTransactions } from "@/actions/transaction";
import { TransactionItem } from "@/components/shared/TransactionItem";

export default async function LatestTransaction() {
  const transactions = await getTransactions();

  return (
    <>
      <h2 className="font-bold my-6 text-center">Latest Transaction</h2>
      <div className="space-y-1">
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            type={transaction.type}
            date={transaction.date}
            amount={transaction.amount}
          />
        ))}
      </div>
    </>
  );
}
