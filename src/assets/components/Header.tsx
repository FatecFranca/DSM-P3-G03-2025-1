import { SettingsIcon } from "lucide-react";

export function Header() {
    return (
        <div className="flex w-full h-10 top-0 bg-gray-700 text-white items-center justify-between px-2 py-2">
            <div className="flex">
                <p>LOGO</p>
            </div>

            <div className="flex">
                <input type="text" className="p-1 px-2 bg-white/80 outline-none border-1 border-white/80 rounded-md text-black w-150" placeholder="Pesquisar"/>
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