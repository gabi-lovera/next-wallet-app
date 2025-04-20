"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

export function BackButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="text-white cursor-pointer">
      <ChevronLeft size={24} />
    </button>
  );
}
