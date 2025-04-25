import { Album, ArrowLeftRight, Box, ChartNoAxesCombined, Home, ShieldUser, Users } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

export function NavBar() {
    const location = useLocation();
    const verifyPath=(path:string) => {
        
        return location.pathname === path ? "bg-zinc-300" : "bg-zinc-200";
        

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
        <div className="flex flex-col w-40 h-screen p-4 bg-zinc-200 items-center justify-between ">
            <div className="flex items-center">
                <p>logo</p>
            </div>
            <div className="flex flex-col gap-2 items-start">
                {items.map((item) => (
                    <Link to={item.path}>
                        <div className={`flex gap-2 ${verifyPath(item.path)}`} key={item.title}>
                            <item.icon />
                            <p>{item.title}</p>

                        </div>
                    </Link>

                ))}
            </div>
            <div className="flex items-center">

            </div>
        </div>

    )
}