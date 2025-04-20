"use server";

import { Suspense } from "react";
import Loading from "@/components/shared/Loading";
import LatestTransaction from "./LatestTransaction";
import SendAgain from "./SendAgain";
import UserSummary from "./UserSummary";

export default async function HomeScreen() {
  return (
    <>
      <UserSummary />
      <div className="flex-1 bg-white rounded-t-3xl p-4 mt-4">
        <SendAgain />

        <Suspense fallback={<Loading />}>
          <LatestTransaction />
        </Suspense>
      </div>
    </>
  );
}
