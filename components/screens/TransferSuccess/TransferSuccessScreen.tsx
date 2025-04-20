"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useTransferStore } from "@/providers/transfer-store";
import { Button } from "@/components/shared/Button";
import { formatDate } from "@/lib/utils";
import ErrorMessage from "@/components/shared/ErrorMessage";

export default function TransferSuccessScreen() {
  const router = useRouter();
  const { currentTransfer: transfer } = useTransferStore((state) => state);

  if (!transfer) return <ErrorMessage />;

  return (
    <>
      <div className="flex-1 bg-white m-5 mt-12 rounded-3xl p-6 flex flex-col">
        <div className="text-center mb-6">
          <div className="text-emerald-500 font-bold text-xl mb-1">
            Transfer Successful
          </div>
          <div className="text-gray-500 text-sm">
            Your transaction was successful
          </div>
        </div>

        <div className="text-center mb-8">
          <div className="text-4xl font-bold">
            $ {transfer?.amount?.toLocaleString()}
          </div>
        </div>

        <div className="mb-6 text-center">
          <div className="font-bold mb-2">Send to</div>
          <div className="flex items-center text-center justify-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mr-3 ">
              <Image
                src={transfer?.picture?.thumbnail || "/placeholder.svg"}
                alt={transfer?.name?.first || "User"}
                width={48}
                height={48}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <div className="font-medium">{transfer?.name?.first}</div>
              <div className="font-medium">{transfer?.name?.last}</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 mb-6">
          <div className="text-lg font-medium mb-4">Transaction Details</div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <div className="text-gray-500">Amount</div>
              <div className="font-medium">
                ${transfer?.amount?.toLocaleString()}
              </div>
            </div>

            <div className="flex justify-between">
              <div className="text-gray-500">Notes</div>
              <div className="font-medium">{transfer?.notes || "-"}</div>
            </div>

            <div className="flex justify-between">
              <div className="text-gray-500">Date</div>
              <div className="font-medium">{formatDate(transfer?.date)}</div>
            </div>

            <div className="flex justify-between">
              <div className="text-gray-500">Reference Number</div>
              <div className="font-medium">#{transfer?.reference}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto space-y-3 m-5 mb-8">
        <Button variant="primary" className="border-1 border-white">
          Share
        </Button>
        <Button variant="outline" onClick={() => router.push("/")}>
          Back to Home
        </Button>
      </div>
    </>
  );
}
