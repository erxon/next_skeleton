import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";


export const metadata: Metadata = {
  title: "Next JS Skeleton",
  description: "A Next JS Starter kit with authentication, and mongodb integration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
