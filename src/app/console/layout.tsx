import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/app/globals.css'
import DarkModeWrapper from "@/components/DarkModeWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Calc - Console",
    description: "written in next.js",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <DarkModeWrapper>{children}</DarkModeWrapper>
        </body>
        </html>
    );
}
