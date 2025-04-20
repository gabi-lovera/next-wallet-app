"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ArrowLeftRight, User } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Footer() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 w-full grid grid-cols-3 border-t border-gray-200 bg-white z-50 ">
      <Link
        href="/"
        className={cn(
          "flex flex-col items-center justify-center py-2",
          pathname === "/" ? "text-emerald-500" : "text-gray-500"
        )}
      >
        <Home size={20} />
        <span className="text-xs mt-1">Home</span>
      </Link>
      <Link
        href="/transfers"
        className={cn(
          "flex flex-col items-center justify-center py-2",
          pathname === "/transfers" ? "text-emerald-500" : "text-gray-500"
        )}
      >
        <ArrowLeftRight size={20} />
        <span className="text-xs mt-1">Transfers</span>
      </Link>
      <Link
        href="/profile"
        className={cn(
          "flex flex-col items-center justify-center py-2",
          pathname === "/profile" ? "text-emerald-500" : "text-gray-500"
        )}
      >
        <User size={20} />
        <span className="text-xs mt-1">Profile</span>
      </Link>
    </div>
  );
}
