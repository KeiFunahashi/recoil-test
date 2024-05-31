'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import { RecoilRoot } from "recoil";
import { SideBar } from "@/components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ display: 'flex' }}>
        <SideBar />
        <RecoilRoot>{children}</RecoilRoot>
      </body>
    </html>
  );
}
