import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import ThemeToggleButton from "./components/theme-toggle-button";

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
        className={`${inter.className} ${GeistMono.variable} md:mx-auto w-11/13 md:w-1/2 mt-20 mx-20 flex flex-col gap-16 mb-20 bg-gray-50 text-gray-950 dark:bg-gray-950 dark:text-gray-50`}
      >
        <Header />
        <main>{children}</main>
        <ThemeToggleButton />
        <Footer />
      </body>
    </html>
  );
}
