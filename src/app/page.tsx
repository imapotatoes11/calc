import Button from "@/components/Button";

export default function Home() {
    return (
        <main className="bg-slate-50 flex flex-row align-center items-center h-screen justify-center">
            <div className="bg-slate-700 flex flex-col gap-4 align-center content-center rounded-2xl shadow-2xl drop-shadow-2xl py-8 px-6 h-min">
                <div className="bg-slate-100 p-4 rounded-2xl shadow-lg shadow-gray-500 w-72 text-right font-medium text-2xl mb-2">
                    result
                </div>
                <div className="flex-row gap-4 flex justify-center">
                    <Button value="AC" variant="ac"/>
                    <Button value="±" variant="ce"/>
                    <Button value="^" variant="operator"/>
                    <Button value="/" variant="operator"/>
                </div>
                <div className="flex-row gap-4 flex justify-center">
                    <Button value="7"/>
                    <Button value="8"/>
                    <Button value="9"/>
                    <Button value="*" variant="operator"/>
                </div>
                <div className="flex-row gap-4 flex justify-center">
                    <Button value="4"/>
                    <Button value="5"/>
                    <Button value="6"/>
                    <Button value="-" variant="operator"/>
                </div>
                <div className="flex-row gap-4 flex justify-center">
                    <Button value="1"/>
                    <Button value="2"/>
                    <Button value="3"/>
                    <Button value="+" variant="operator"/>
                </div>
                <div className="flex-row gap-4 flex justify-center">
                    <Button value="0"/>
                    <Button value="."/>
                    <Button value="=" variant="equals"/>
                </div>
            </div>
        </main>
    )
}