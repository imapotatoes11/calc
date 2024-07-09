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