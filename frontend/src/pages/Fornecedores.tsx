import { Plus } from "lucide-react";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

export function Fornecedores() {
    const [fornecedores, setFornecedores] = useState<any[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost:5000/fornecedores")
            .then(res => res.json())
            .then(data => setFornecedores(data))
            .catch(err => console.error("Erro ao carregar fornecedores", err))
    }, [])

    return (
        <div className="flex flex-col h-screen flex-1 bg-zinc-100 text-sm">
            <Header />
            <div className="flex flex-1">
                <NavBar />
                <div className="flex flex-col flex-1">
                    <div className="flex w-full px-4 py-4 justify-between">
                        <div className="flex gap-2">
                            <button className="flex bg-zinc-500  px-4 h-10 rounded-md items-center gap-1 text-white" onClick={() => navigate('/fornecedores/cadastrar')}>
                                <Plus />
                                Novo Fornecedor
                            </button>
                        </div>
                    </div>
                    <div className="overflow-auto p-4 bg-zinc-100">
                        <table className="min-w-full border border-zinc-400 text-sm text-black/80">
                            <thead className="bg-zinc-100">
                                <tr>
                                    <th className="border border-zinc-400 px-2 py-2">ID</th>
                                    <th className="border border-zinc-400 px-2 py-2">Nome</th>
                                    <th className="border border-zinc-400 px-2 py-2">CNPJ</th>
                                    <th className="border border-zinc-400 px-2 py-2">CPF</th>
                                    <th className="border border-zinc-400 px-2 py-2">Contato</th>
                                    <th className="border border-zinc-400 px-2 py-2">E-mail</th>
                                    <th className="border border-zinc-400 px-2 py-2">Endereço</th>
                                    <th className="border border-zinc-400 px-2 py-2">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fornecedores.map((f, index) => (
                                    <tr key={index} className={index % 2 === 0 ? "bg-zinc-200" : "bg-zinc-300"}>
                                        <td className="border border-zinc-400 px-2 py-2 text-center">{f._id}</td>
                                        <td className="border border-zinc-400 px-2 py-2">{f.nome}</td>
                                        <td className="border border-zinc-400 px-2 py-2">{f.cnpj}</td>
                                        <td className="border border-zinc-400 px-2 py-2">{f.cpf}</td>
                                        <td className="border border-zinc-400 px-2 py-2">{f.contato}</td>
                                        <td className="border border-zinc-400 px-2 py-2">{f.email}</td>
                                        <td className="border border-zinc-400 px-2 py-2">{f.endereco}</td>
                                        <td className="border border-zinc-400 px-2 py-2 text-center">
                                            <button className="text-blue-600 underline" onClick={() => navigate(`/fornecedores/editar/${f._id}`)}>Editar</button>
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
