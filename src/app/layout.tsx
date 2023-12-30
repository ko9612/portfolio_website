import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopButton from "@/components/TopButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hana's Portfolio",
  description: "고하나 개인 포트폴리오",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col bg-[#121212]">
          {children}
        </main>
        <TopButton />
      </body>
    </html>
  );
}
