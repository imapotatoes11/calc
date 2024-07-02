import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DarkModeWrapper from "@/components/DarkModeWrapper";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calc",
  description: "written in next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
    <html lang="en">
        <head>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
        </head>
    <body className={inter.className}>
    <DarkModeWrapper>{children}</DarkModeWrapper>
    </body>
    </html>
    );
}
