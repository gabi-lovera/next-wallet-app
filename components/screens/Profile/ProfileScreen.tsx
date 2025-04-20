"use client";

import { BackButton } from "@/components/shared/BackButton";
import { useUserStore } from "@/providers/user-store";
import UserInfoRow from "./UserInfoRow";
import Image from "next/image";

export function ProfileScreen() {
  const { userInfo: user } = useUserStore((state) => state);
  const { name, location, email, phone, picture, login } = user || {};

  return (
    <>
      <div className="px-4 py-4 flex items-center">
        <BackButton />
        <div className="flex-1 text-xl text-center text-white font-medium">
          Profile
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-white rounded-t-3xl p-4 mt-4">
        <div className="flex flex-col items-center my-6">
          <div className="w-60 h-60 rounded-full overflow-hidden mb-3">
            <Image
              src={picture?.thumbnail || "/placeholder.svg"}
              alt={name?.first || "User"}
              width={112}
              height={112}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-3xl font-bold">
            {name?.first} {name?.last}
          </h1>
        </div>

        <div className="py-12 px-2 space-y-6">
          <UserInfoRow label="City" value={location?.city} />
          <UserInfoRow label="State" value={location?.state} />
          <UserInfoRow label="Street" value={location?.street?.name} />
          <UserInfoRow label="Email" value={email} />
          <UserInfoRow label="Phone" value={phone} />
        </div>

        <div className="mt-auto pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div className="text-gray-400">ID</div>
            <div className="text-gray-400">{login?.uuid}</div>
          </div>
        </div>
      </div>
    </>
  );
}
