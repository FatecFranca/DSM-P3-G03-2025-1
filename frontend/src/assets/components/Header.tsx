import { SettingsIcon } from "lucide-react";

export function Header() {
    return (
        <div className="flex w-full h-12 top-0 bg-zinc-200 items-center justify-between px-2 py-2">
            <div className="flex">
                <p className="font-bold text-2xl">INVEX</p>
            </div>

            <div className="flex">
                <input type="text" className="p-1 px-2 bg-white outline-none border-1 border-black/20 rounded-md text-black w-150" placeholder="Pesquisar"/>
            </div>

            <div className="flex gap-2">
                <select name="user" id="user">
                    <option value="Usuario">Usuário </option>
                </select>
                <SettingsIcon size={20}/>
            </div>
        </div>
    )
}