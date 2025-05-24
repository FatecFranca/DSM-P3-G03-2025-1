import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";

export function Home() {
    return (

        <div className="flex flex-col h-screen flex-1 bg-zinc-900 text-sm">
            <Header />
            <div className="flex flex-1">
                <NavBar />
                <div className="flex w-full px-2 py-2 justify-between">
                    <p className="text-white">Home</p>
                </div>
            </div>

        </div>
    )

}