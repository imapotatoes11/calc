'use client';
import { useEffect, useState } from 'react';
import ConstrastIcon from "@mui/icons-material/Contrast";
import ConfigButton from "@/components/ConfigButton";

const getPreferredColorScheme = (): string => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    } else {
        return 'light';
    }
}

export default function DarkModeWrapper({children}: {children: React.ReactNode}) {
    useEffect(() => {
        if (localStorage.getItem("darkmode") === null) {
            localStorage.setItem("darkmode", getPreferredColorScheme());

            if (getPreferredColorScheme() === "dark") {
            } else { document.documentElement.classList.add("dark"); }
        } else {
            console.log(1)
            console.log(localStorage.getItem("darkmode"))

            if (localStorage.getItem("darkmode") === "dark") {
            } else { document.documentElement.classList.add("dark"); }
        }
    }, []);
    return (
        <div>
            {children}
            <ConfigButton position="bottomright" onClick={() => {
                // @ts-ignore
                const target = event.target as HTMLElement;
                target.blur()
                if (document.documentElement.classList.contains("dark")) {
                    document.documentElement.classList.remove("dark");
                    localStorage.setItem("darkmode", "dark");
                } else {
                    document.documentElement.classList.add("dark");
                    localStorage.setItem("darkmode", "light");
                }
            }}><ConstrastIcon/></ConfigButton>
        </div>
    );
}