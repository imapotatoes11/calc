'use client';
import ConfigButton from "@/components/ConfigButton";
import CalculateRoundedIcon from '@mui/icons-material/CalculateRounded';
import DeleteIcon from '@mui/icons-material/Delete'
import {useState} from "react";
// @ts-ignore
import Modal from "react-modal";

interface Expression {
    value: string;
    result: string;
}

export default function Home() {
    const [inputValue, setInputValue] = useState('');
    const [pastInputs, setPastInputs] = useState<Expression[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleKeyPress = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            const pi = 3.14159265358979323846;
            const e = 2.71828182845904523536;
            const ln = Math.log; const log = Math.log10; const sqrt = Math.sqrt; const abs = Math.abs;
            const sin = Math.sin; const cos = Math.cos; const tan = Math.tan;
            const asin = Math.asin; const acos = Math.acos; const atan = Math.atan;
            const cosh = Math.cosh; const tanh = Math.tanh; const asinh = Math.asinh; const acosh = Math.acosh;
            const atanh = Math.atanh; const cbrt = Math.cbrt; const pow = Math.pow;
            console.log(inputValue)
            setPastInputs([{ value: inputValue, result: eval(inputValue).toString() }, ...pastInputs])
            setInputValue('')
        }
    }

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <main className="bg-slate-50 dark:bg-slate-900 flex flex-row align-center items-center h-screen justify-center transition-all">
            <ConfigButton position="bottomleft" redirectURL="/"><CalculateRoundedIcon></CalculateRoundedIcon></ConfigButton>
            <div className="bg-slate-50 dark:bg-slate-300 flex flex-col gap-4 align-center content-center rounded-2xl shadow-2xl drop-shadow-2xl py-8 px-6 h-min transition-all">
                <div className="flex-col gap-4 flex justify-center">
                    <div className="w-96 flex justify-end flex-row gap-4">
                        <button className="mr-0.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-400 transition-all inline-block" title="Clear History" onClick={() => setPastInputs([])}>
                            <DeleteIcon/>
                        </button>
                        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                               onKeyPress={handleKeyPress} placeholder="Enter an expression..."
                               className="font-mono bg-slate-100 p-4 rounded-md shadow-md focus:shadow-gray-400 focus:outline-none w-96 text-right font-medium mb-2 break-all transition-all"/>
                    </div>
                </div>
                <div className="absolute top-28">
                    {pastInputs.slice(0, 5).map((expression, index) => (
                        <div key={index} className="w-96 flex justify-end">
                            <div
                                className="font-mono bg-slate-100 dark:bg-slate-700 dark:text-white p-4 rounded-md shadow-md focus:shadow-gray-400 focus:outline-none w-96 text-right font-medium mb-2 break-all transition-all">
                                {expression.value} = {expression.result}
                            </div>
                        </div>
                    ))}
                    {pastInputs.length > 5 && (
                        <div onClick={handleOpenModal} className="w-96 flex justify-end cursor-pointer">
                            <div
                                className="font-mono bg-slate-100 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 p-4 rounded-md shadow-md focus:shadow-gray-400 focus:outline-none w-96 font-medium mb-2 break-all text-center transition-all">
                                ...
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                onAfterOpen={() => {
                    document.getElementById('modal-content')?.scrollTo(0, 0);
                }}
                className="bg-white dark:bg-slate-300 p-6 rounded-md shadow-lg w-96 transition-all"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-all"
            >
                <h2 className="text-xl mb-4">History</h2>
                <div id="modal-content" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                    {pastInputs.map((expression, index) => (
                        <div key={index} className="w-full flex justify-end mb-2">
                            <div className="font-mono bg-slate-100 dark:bg-gray-200 p-4 rounded-md shadow-md focus:shadow-gray-400 focus:outline-none w-full text-right font-medium break-all">
                                {expression.value} = {expression.result}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-row gap-2">
                    <button onClick={handleCloseModal} className="mt-4 bg-blue-400 dark:bg-blue-800 text-white p-2 rounded-md">
                        Close
                    </button>
                    <button onClick={() => {handleCloseModal(); setPastInputs([])}} className="mt-4 bg-blue-400 dark:bg-blue-800 text-white p-2 rounded-md">
                        Clear All
                    </button>
                </div>
            </Modal>
        </main>
    )
}