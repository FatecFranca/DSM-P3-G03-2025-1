import { ArrowUp, Plus } from "lucide-react";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { useEffect, useState } from "react";


export function Produtos() {
    const [produtos, setProdutos] = useState<any[]>([])

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProdutos(data))
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
                            <button className="flex bg-zinc-500  px-4 h-10 rounded-md items-center gap-1 text-white" >
                                <Plus />
                                Cadastrar Produto
                            </button>
                            <button className="flex border-1 border-blue-500 text-blue-500 px-4 h-10 rounded-md items-center gap-1">

                                <ArrowUp />
                                Importar Produto
                            </button>
                            <select name="a" id="a" className="flex border-1 border-blue-500 text-blue-500 px-4 h-10 rounded-md">
                                <option value="a" disabled selected>Mais opções</option>
                            </select>
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
                                    <th className="border border-zinc-400 px-2 py-2">Código</th>
                                    <th className="border border-zinc-400 px-2 py-2">Nome</th>
                                    <th className="border border-zinc-400 px-2 py-2">Variações</th>
                                    <th className="border border-zinc-400 px-2 py-2">IPI</th>
                                    <th className="border border-zinc-400 px-2 py-2">Estoque</th>
                                    <th className="border border-zinc-400 px-2 py-2">Comissão</th>
                                    <th className="border border-zinc-400 px-2 py-2">Preço Tabela</th>
                                    <th className="border border-zinc-400 px-2 py-2">2024</th>
                                    <th className="border border-zinc-400 px-2 py-2">Atacado</th>
                                    <th className="border border-zinc-400 px-2 py-2">Desconto</th>
                                    <th className="border border-zinc-400 px-2 py-2">E-commerce</th>
                                </tr>
                            </thead>
                            <tbody>
                                {produtos.map((p, index) => (
                                    <tr
                                        key={index}
                                        className={index % 2 === 0 ? "bg-zinc-200" : "bg-zinc-300"}
                                    >
                                        <td className="border border-zinc-400 px-2 py-2 text-center">
                                            {p.codigo}
                                        </td>
                                        <td className="border border-zinc-400 px-2 py-2">{p.nome}</td>
                                        <td className="border border-zinc-400 px-2 py-2 text-center">
                                            {p.variacoes}
                                        </td>
                                        <td className="border border-zinc-400 px-2 py-2 text-center">
                                            {p.ipi === null ? '--' : p.ipi}
                                        </td>
                                        <td
                                            className={`border border-zinc-400 px-2 py-2 text-center ${p.estoque < 0 ? "text-red-500" : ""
                                                }`}
                                        >
                                            {p.estoque}
                                        </td>
                                        <td className="border border-zinc-400 px-2 py-2 text-center">
                                            {p.comissao === null ? '--' : p.comissao}
                                        </td>
                                        <td className="border border-zinc-400 px-2 py-2 text-center">
                                            R$ {parseFloat(p.precoTabela).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                        </td>
                                        <td className="border border-zinc-400 px-2 py-2 text-center">
                                            R$ {parseFloat(p.preco2024).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                        </td>
                                        <td className="border border-zinc-400 px-2 py-2 text-center">
                                            R$ {parseFloat(p.precoAtacado).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                        </td>
                                        <td className="border border-zinc-400 px-2 py-2 text-center">
                                            R$ {parseFloat(p.precoDesconto).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                        </td>
                                        <td className="border border-zinc-400 px-2 py-2 text-center">
                                            R$ {parseFloat(p.precoEcommerce).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
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