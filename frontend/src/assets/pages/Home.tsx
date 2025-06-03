import { ShoppingBag } from "lucide-react";
import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";
import { ChartsDashboard } from "../../components/ChartsDashboard";

export function Home() {
    return (

        <div className="flex flex-col h-screen flex-1 text-sm">
            <Header />
            <div className="flex flex-1 bg-zinc-100">
                <NavBar />
                <div className="flex justify-around flex-col w-full p-8">
                    <h1 className="font-bold text-2xl">Dashboard</h1>
                    <div className="flex w-full justify-around gap-4">
                        <div className="flex w-full gap-4 bg-green-500 rounded-md p-4">
                            <div className="flex justify-between w-full p-2">
                                <div className="flex flex-col text-white gap-4">
                                    <p className="text-xs">VENDAS DE HOJE</p>
                                    <p className="text-lg font-semibold">R$ 1.234,56</p>
                                </div>
                                <div className="flex items-center justify-center bg-green-600 rounded-full shadow-md size-10">
                                    <ShoppingBag fill="white" stroke="#00a63e" size={15} />
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full gap-4 bg-red-500 rounded-md p-4">
                            <div className="flex justify-between w-full p-2">
                                <div className="flex flex-col text-white gap-4">
                                    <p className="text-xs">A PAGAR HOJE</p>
                                    <p className="text-lg font-semibold">R$ 1.234,56</p>
                                </div>
                                <div className="flex items-center justify-center bg-red-600 rounded-full shadow-md size-10">
                                    <ShoppingBag fill="white" stroke="#000" size={15} />
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full gap-4 bg-blue-500 rounded-md p-4">
                            <div className="flex justify-between w-full p-2">
                                <div className="flex flex-col text-white gap-4">
                                    <p className="text-xs">A RECEBER HOJE</p>
                                    <p className="text-lg font-semibold">R$ 1.234,56</p>
                                </div>
                                <div className="flex items-center justify-center bg-blue-600 rounded-full shadow-md size-10">
                                    <ShoppingBag fill="white" stroke="#00a63e" size={15} />
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full gap-4 bg-purple-500 rounded-md p-4">
                            <div className="flex justify-between w-full p-2">
                                <div className="flex flex-col text-white gap-4">
                                    <p className="text-xs">FATURAMENTO DO MÊS</p>
                                    <p className="text-lg font-semibold">R$ 1.234,56</p>
                                </div>
                                <div className="flex items-center justify-center bg-purple-600 rounded-full shadow-md size-10">
                                    <ShoppingBag fill="white" stroke="#00a63e" size={15} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <ChartsDashboard />
                </div>
            </div>

        </div>
    )

}