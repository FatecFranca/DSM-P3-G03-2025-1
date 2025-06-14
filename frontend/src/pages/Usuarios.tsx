import { Plus, Shield, User } from "lucide-react";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { useEffect, useState } from "react";

export function Usuarios() {
    const [usuarios, setUsuarios] = useState<any[]>([])

    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then(res => res.json())
            .then(data => setUsuarios(data))
            .catch(err => console.error("Erro ao carregar produtos", err))
    }, [])

    return (

        <div className="flex flex-col h-screen flex-1 bg-zinc-100 text-sm">
            <Header />
            <div className="flex flex-1">
                <NavBar />
                <div className="flex flex-col flex-1">
                    <div className="flex w-full px-4 py-4 justify-between">
                        <div className="flex gap-2">
                            <button className="flex bg-zinc-500  px-4 h-10 rounded-md items-center gap-1 text-white">
                                <Plus />
                                Cadastrar Novo Usuário
                            </button>
                        </div>

                        <div className="flex">
                            <select name="a" id="a" className="flex bg-white/80 px-4 h-10 rounded-md text-black border border-zinc-500">
                                <option value="a" disabled selected>Todas as Categorias</option>
                            </select>
                        </div>
                    </div>

                    <div className="overflow-auto p-4 bg-zinc-100">
                        <table className="min-w-full border border-zinc-400 text-sm text-black/80">
                            <thead className="bg-zinc-100">
                                <tr>
                                    <th className="border border-zinc-400 px-2 py-2">ID</th>
                                    <th className="border border-zinc-400 px-2 py-2">Nome</th>
                                    <th className="border border-zinc-400 px-2 py-2">Idade</th>
                                    <th className="border border-zinc-400 px-2 py-2">Email</th>
                                    <th className="border border-zinc-400 px-2 py-2">CPF</th>
                                    <th className="border border-zinc-400 px-2 py-2">Tipo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios.map((p, index) => (
                                    <tr
                                        key={index}
                                        className={index % 2 === 0 ? "bg-zinc-200" : "bg-zinc-300"}
                                    >
                                        <td className="border border-zinc-400 px-2 py-2 text-center">
                                            {p._id}
                                        </td>
                                        <td className="border border-zinc-400 px-2 py-2 text-center">
                                            {p.nome}
                                        </td>
                                        <td className="border border-zinc-400 px-2 py-2 text-center">
                                            {p.idade}
                                        </td>
                                        <td className="border border-zinc-400 px-2 py-2 text-center">
                                            {p.email}
                                        </td>
                                        <td className="border border-zinc-400 px-2 py-2 text-center">
                                            {p.cpf}
                                        </td>
                                        <td className="border border-zinc-400 px-2 py-2 text-center">
                                            <div className="flex gap-2">
                                                {p.tipo === 'Administrador' ? <Shield /> : <User />}
                                                {p.tipo}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )

}