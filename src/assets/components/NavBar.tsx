import { Album, ArrowLeftRight, Box, ChartNoAxesCombined, Home, ShieldUser, Users } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

export function NavBar() {
    const location = useLocation();
    const verifyPath = (path: string) => {

        return location.pathname === path ? "bg-gray-700 text-blue-300" : "bg-gray-800 text-white/80";


    }
    const items = [

        {
            title: "Home",
            icon: Home,
            path: "/",


        },
        {
            title: "Categorias",
            icon: Album,
            path: "/categorias"
        },
        {
            title: "Produtos",
            icon: Box,
            path: "/produtos"
        },
        {
            title: "Relatórios",
            icon: ChartNoAxesCombined,
            path: "/relatorios"
        },


        {
            title: "Movimentações",
            icon: ArrowLeftRight,
            path: "/movimentacoes"
        },
        {
            title: "Fornecedores",
            icon: ShieldUser,
            path: "/fornecedores"
        },
        {
            title: "Usuários",
            icon: Users,
            path: "/usuarios"
        },
    ]
    return (
        <div className="flex flex-col h-full bg-gray-800 items-center justify-between py-2 px-2">
            <div className="flex flex-col gap-1">
                {items.map((item) => (
                    <Link to={item.path} className={`flex gap-2 ${verifyPath(item.path)} p-2 w-full`} key={item.title}>
                        <item.icon size={20}/>
                        <p>{item.title}</p>
                    </Link>
                ))}
            </div>
            <p className="text-white/80 text-sm">Trabalho PI Fatec &copy;</p>
        </div>
    )
}