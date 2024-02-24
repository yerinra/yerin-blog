import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "yerin ra | Personal Page",
  description: "This is yerin's personal page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${GeistMono.variable} w-11/13 md:w-3/5 mx-10 mt-20 md:mx-auto flex flex-col gap-16 mb-20 `}
      >
        <Header />
        <main>{children}</main>
        {/*  bg-gray-50 text-gray-950 dark:bg-gray-950 dark:text-gray-50 */}
        <Footer />
      </body>
    </html>
  );
}
