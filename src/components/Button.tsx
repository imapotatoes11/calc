import {MouseEventHandler} from "react";
import styles from "@/styles/components/Button.module.css";

interface ButtonProps {
    value: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    variant?: 'default' | 'operator' | 'equals' | 'ac' | 'ce';
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({value, onClick, variant = 'default', disabled = false}) => {
    var variantStyle = `bg-slate-50 hover:bg-slate-300 text-slate-600 hover:shadow-none`;
    if (variant === 'operator') {
        variantStyle = `bg-slate-200 hover:bg-slate-400 text-slate-600 hover:shadow-none`;
    } else if (variant === 'equals') {
        variantStyle = `bg-slate-400 hover:bg-slate-600 text-white hover:shadow-none`;
    } else if (variant === 'ac') {
        variantStyle = `bg-orange-400 text-white hover:bg-orange-600 hover:shadow-none`;
    } else if (variant === 'ce') {
        variantStyle = `bg-slate-300 hover:bg-slate-500 text-slate-600 hover:shadow-none`;
    }
    return (
        <button
            className={`${variantStyle} p-3 rounded-2xl font-medium ${value === '0' ? 'w-32' : 'w-14'} shadow-lg shadow-gray-500 text-lg`}
            onClick={onClick}
            disabled={disabled}
            style={{transition: ".15s ease-out"}}
            id={value}
        >
            {value}
        </button>
    );
}

export default Button;