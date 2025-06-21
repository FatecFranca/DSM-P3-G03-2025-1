import { Plus } from "lucide-react";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

export function Movimentacoes() {
    const [movimentacoes, setMovimentacoes] = useState<any[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost:5000/movimentacoes")
            .then(res => res.json())
            .then(data => setMovimentacoes(data))
            .catch(err => console.error("Erro ao carregar movimentações", err))
    }, [])

    return (
        <div className="flex flex-col h-screen flex-1 bg-zinc-100 text-sm">
            <Header />
            <div className="flex flex-1">
                <NavBar />
                <div className="flex flex-col flex-1">
                    <div className="flex w-full px-4 py-4 justify-between">
                        <div className="flex gap-2">
                            <button className="flex bg-zinc-500  px-4 h-10 rounded-md items-center gap-1 text-white" onClick={() => navigate('/movimentacoes/cadastrar')}>
                                <Plus />
                                Nova Movimentação
                            </button>
                        </div>
                    </div>
                    <div className="overflow-auto p-4 bg-zinc-100">
                        <table className="min-w-full border border-zinc-400 text-sm text-black/80">
                            <thead className="bg-zinc-100">
                                <tr>
                                    <th className="border border-zinc-400 px-2 py-2">ID</th>
                                    <th className="border border-zinc-400 px-2 py-2">Tipo</th>
                                    <th className="border border-zinc-400 px-2 py-2">Produto</th>
                                    <th className="border border-zinc-400 px-2 py-2">Fornecedor</th>
                                    <th className="border border-zinc-400 px-2 py-2">Quantidade</th>
                                    <th className="border border-zinc-400 px-2 py-2">Data</th>
                                    <th className="border border-zinc-400 px-2 py-2">Usuário</th>
                                    <th className="border border-zinc-400 px-2 py-2">Observações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {movimentacoes.map((m, index) => (
                                    <tr key={index} className={index % 2 === 0 ? "bg-zinc-200" : "bg-zinc-300"}>
                                        <td className="border border-zinc-400 px-2 py-2 text-center">{m._id}</td>
                                        <td className="border border-zinc-400 px-2 py-2 text-center">{m.tipo}</td>
                                        <td className="border border-zinc-400 px-2 py-2">{m.produto?.nome || '-'}</td>
                                        <td className="border border-zinc-400 px-2 py-2">{m.fornecedor?.nome || '-'}</td>
                                        <td className="border border-zinc-400 px-2 py-2 text-center">{m.quantidade}</td>
                                        <td className="border border-zinc-400 px-2 py-2 text-center">{new Date(m.data).toLocaleString('pt-BR')}</td>
                                        <td className="border border-zinc-400 px-2 py-2">{m.usuario?.nome || '-'}</td>
                                        <td className="border border-zinc-400 px-2 py-2">{m.observacoes || '-'}</td>
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
