'use client';
import Button from "@/components/Button";
import {useEffect, useState} from "react";
import ConfigButton from "@/components/ConfigButton";
import TerminalIcon from '@mui/icons-material/Terminal';

export default function Home() {
    const [result, setResult] = useState("0");
    const [ans, setAns]  = useState(0);

    const interpretInputFromButton = (value: string) => {
        if (value === "AC" || value === "a" || value === "c") {
            setResult("0");
        } else if (value === "±") {
            setResult((parseFloat(result) * -1).toString());
        } else if (value === "^") {
            setResult((parseFloat(result) ** 2).toString());
        } else if (value === "=" || value === "Enter") {
            setAns(eval(result));
            setResult(eval(result).toString());
        } else {
            if (result === "0") {
                setResult(value);
            } else {
                setResult(result + value);
            }
        }
    }

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const regex = /^[0-9ac^/*+-=.]|(Enter)$/; // add the keys you want to match here
            if (regex.test(event.key)) {
                interpretInputFromButton(event.key);
            }
        }
        window.addEventListener('keydown', handleKeyDown);

        // apparently have to clean up event listener for when component unmounts
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    })


    const getFontSize = () => {
        const baseFontSize = 30; // base font size in pixels
        const minFontSize = 10; // minimum font size in pixels
        const decrement = (baseFontSize - minFontSize) / 100; // decrement per character

        // calculate the font size based on the length of the result
        let fontSize = baseFontSize - (result.length * decrement);

        // ensure the font size does not go below the minimum
        if (fontSize < minFontSize) {
            fontSize = minFontSize;
        }

        return fontSize;
    };

    const getTextWrap = () => {
        return result.length > 16 ? 'break-all' : 'break-normal';
    };

    return (
        <main className="bg-slate-50 dark:bg-slate-900 flex flex-row align-center items-center h-screen justify-center" style={{transition: ".15s ease-out"}}>
            <ConfigButton position="bottomleft" redirectURL="/console"><TerminalIcon></TerminalIcon></ConfigButton>
            <div className="bg-slate-700 dark:bg-slate-200 flex flex-col gap-4 align-center content-center rounded-2xl shadow-2xl drop-shadow-2xl py-8 px-6 h-min" style={{transition: ".15s ease-out"}}>
                <div style={{fontSize: `${getFontSize()}px`}}
                     className={`bg-slate-100 p-4 rounded-xl shadow-lg shadow-gray-500 w-72 text-right font-medium mb-2 ${getTextWrap()} dark:text-black`}>
                    {result}
                </div>
                <div className="flex-row gap-4 flex justify-center">
                    <Button value="AC" variant="ac" onClick={() => interpretInputFromButton("AC")}/>
                    <Button value="±" variant="operator" onClick={() => interpretInputFromButton("±")}/>
                    <Button value="^" variant="operator" onClick={() => interpretInputFromButton("^")}/>
                    <Button value="/" variant="operator" onClick={() => interpretInputFromButton("/")}/>
                </div>
                <div className="flex-row gap-4 flex justify-center">
                    <Button value="7" onClick={() => interpretInputFromButton("7")}/>
                    <Button value="8" onClick={() => interpretInputFromButton("8")}/>
                    <Button value="9" onClick={() => interpretInputFromButton("9")}/>
                    <Button value="*" variant="operator" onClick={() => interpretInputFromButton("*")}/>
                </div>
                <div className="flex-row gap-4 flex justify-center">
                    <Button value="4" onClick={() => interpretInputFromButton("4")}/>
                    <Button value="5" onClick={() => interpretInputFromButton("5")}/>
                    <Button value="6" onClick={() => interpretInputFromButton("6")}/>
                    <Button value="-" variant="operator" onClick={() => interpretInputFromButton("-")}/>
                </div>
                <div className="flex-row gap-4 flex justify-center">
                    <Button value="1" onClick={() => interpretInputFromButton("1")}/>
                    <Button value="2" onClick={() => interpretInputFromButton("2")}/>
                    <Button value="3" onClick={() => interpretInputFromButton("3")}/>
                    <Button value="+" variant="operator" onClick={() => interpretInputFromButton("+")}/>
                </div>
                <div className="flex-row gap-4 flex justify-center">
                    <Button value="0" onClick={() => interpretInputFromButton("0")}/>
                    <Button value="." onClick={() => interpretInputFromButton(".")}/>
                    <Button value="=" variant="equals" onClick={() => interpretInputFromButton("=")}/>
                </div>
            </div>
        </main>
    )
}