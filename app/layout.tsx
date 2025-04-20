import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { RootLayoutWithData } from "@/components/layouts/RootLayoutWithData";
import Loading from "@/components/shared/Loading";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wallet App",
  description: "Modern banking application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.variable} antialiased`}
      >
        <Suspense fallback={<Loading />}>
          <RootLayoutWithData>{children}</RootLayoutWithData>
        </Suspense>
      </body>
    </html>
  );
}
