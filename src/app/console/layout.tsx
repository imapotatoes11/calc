// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import '@/app/globals.css'
// import DarkModeWrapper from "@/components/DarkModeWrapper";
//
// const inter = Inter({ subsets: ["latin"] });
//
// export const metadata: Metadata = {
//     title: "Calc - Console",
//     description: "written in next.js",
// };
//
// export default function RootLayout({
//                                        children,
//                                    }: Readonly<{
//     children: React.ReactNode;
// }>) {
//     return (
//         <html lang="en">
//         <body className={inter.className}>
//         <DarkModeWrapper>{children}</DarkModeWrapper>
//         </body>
//         </html>
//     );
// }


import { FC } from "react";
import Head from "next/head";
import DarkModeWrapper from "@/components/DarkModeWrapper";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
    children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Calc - Console</title>
                <meta name="description" content="written in next.js" />
                <style>{`body { ${inter.className} }`}</style>
            </Head>
            <DarkModeWrapper>{children}</DarkModeWrapper>
        </>
    );
};

export default RootLayout;