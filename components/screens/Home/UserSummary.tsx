"use client";

import { useUserStore } from "@/providers/user-store";
import UserBalance from "./UserBalance";
import Image from "next/image";

export default function UserSummary() {
  const { userInfo } = useUserStore((state) => state);
  const { name, picture } = userInfo || {};

  return (
    <>
      <div className="px-4 py-2 flex items-center">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image
            src={picture?.thumbnail || "/placeholder.svg"}
            alt={name?.first || "User"}
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="ml-2 text-white">
          <div className="text-sm">
            {name?.first} {name?.last}
          </div>
        </div>
      </div>
      <UserBalance />
    </>
  );
}
