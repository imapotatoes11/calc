import React, { useState, useRef } from 'react';
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

// @ts-ignore
const ExpressionComponent = ({ expression }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [clearAlertOpen, setClearAlertOpen] = useState(false);
    const expressionRef = useRef(null);

    const copyToClipboard = () => {
        const text = `${expression.value} = ${expression.result}`;
        navigator.clipboard.writeText(text).then(() => {
            // Show alert for 2s
            setClearAlertOpen(true);
            setTimeout(() => {
                setClearAlertOpen(false);
            }, 2000);
        }, (err) => {
            console.error('Failed to copy: ', err);
        });
    };

    return (
        <div
            ref={expressionRef}
            className={`cursor-pointer ${isHovered ? 'font-normal' : (clearAlertOpen ? 'font-normal' : 'font-mono')}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={copyToClipboard}
        >
            {isHovered ? "Click to Copy" : `${expression.value} = ${expression.result}`}
            {clearAlertOpen && (
                <div style={{
                    position: 'fixed',
                    bottom: '0rem', // adjust the distance from the bottom as needed // -25rem
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 1000, // ensure it's above other content
                }}>
                    <Alert icon={<CheckIcon/>} severity="success">Copied Result</Alert>
                </div>
            )}
        </div>
    );
};

export default ExpressionComponent;