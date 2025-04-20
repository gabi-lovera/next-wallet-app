import type React from "react";
import Header from "@/components/layouts/Header";

interface MobileLayoutProps {
  children: React.ReactNode;
}

export function MobileLayout({ children }: MobileLayoutProps) {
  return (
    <div className="flex flex-col h-full">
      <Header />
      {children}
    </div>
  );
}
