'use client';
import ConfigButton from "@/components/ConfigButton";
import CalculateRoundedIcon from '@mui/icons-material/CalculateRounded';


export default function Home() {
    return (
        <main className="bg-slate-50 flex flex-row align-center items-center h-screen justify-center">
            <ConfigButton position="bottomleft" redirectURL="/"><CalculateRoundedIcon></CalculateRoundedIcon></ConfigButton>
            <div className="bg-slate-50 flex flex-col gap-4 align-center content-center rounded-2xl shadow-2xl drop-shadow-2xl py-8 px-6 h-min">
                <div className="flex-row gap-4 flex justify-center">
                    Test
                </div>
            </div>
        </main>
    )
}