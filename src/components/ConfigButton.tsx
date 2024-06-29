'use client';
import React, {ReactNode, MouseEventHandler, useState, useEffect} from 'react';
import styles from '@/styles/components/ConfigButton.module.css';
import { useRouter } from 'next/router';

interface ConfigButtonProps {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    position?: 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
    variant?: 'default' | 'outline' | 'borderless';
    disabled?: boolean;
    redirectURL?: string | null;
}

const ConfigButton: React.FC<ConfigButtonProps> = ({children, onClick, position = 'bottomleft', variant = 'default', disabled, redirectURL = null}) => {
    var fvariant = `rounded-lg bg-white shadow-lg`;
    if (variant === 'outline') {
        fvariant = `rounded-lg border-2 border-blue-500 text-blue-600`
    } else if (variant === 'borderless') {
        fvariant = `rounded-lg`
    }

    // const router = typeof window !== 'undefined' ? useRouter() : null;

    // const handleClick = () => {
    //     if (router && redirectURL) {
    //         router.push(redirectURL);
    //     }
    // }
    const handleClick = () => {
        // @ts-ignore
        window.location.href = redirectURL;
    }

    return (
        <button
            className={`${fvariant} ${styles.configbutton} ${styles[position]}`}
            onClick={handleClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default ConfigButton;