import { ArrowUp, Plus } from "lucide-react";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'



export function Produtos() {
    const [produtos, setProdutos] = useState<any[]>([])
    const [categorias, setCategorias] = useState<{_id: string, nome: string}[]>([])
    const [categoriaFiltro, setCategoriaFiltro] = useState('')
    const [alertaEstoque, setAlertaEstoque] = useState<string[]>([])
    const navigate = useNavigate()


    useEffect(() => {
        fetch("http://localhost:5000/products" + (categoriaFiltro ? `?categoria=${categoriaFiltro}` : ''))
            .then(res => res.json())
            .then(data => {
                const arr = Array.isArray(data) ? data : [];
                setProdutos(arr)
                // Alerta de estoque baixo
                const alertas = arr.filter((p: any) => p.estoque <= p.estoqueMinimo).map((p: any) => p.nome)
                setAlertaEstoque(alertas)
            })
            .catch(err => {
                setProdutos([])
                setAlertaEstoque([])
                console.error("Erro ao carregar produtos", err)
            })
    }, [categoriaFiltro])
    useEffect(() => {
        fetch("http://localhost:5000/categorias")
            .then(res => res.json())
            .then(data => setCategorias(data.filter((c: any) => c.ativa)))
    }, [])
    return (

        <div className="flex flex-col h-screen flex-1 bg-zinc-100 text-sm">
            <Header />
            <div className="flex flex-1">
                <NavBar />
                <div className="flex flex-col flex-1">
                    <div className="flex w-full px-4 py-4 justify-between">
                        <div className="flex gap-2">
                            <button className="flex bg-zinc-500  px-4 h-10 rounded-md items-center gap-1 text-white"   onClick={() => navigate('/produtos/cadastrar')}>
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
                            <select value={categoriaFiltro} onChange={e => setCategoriaFiltro(e.target.value)} className="flex bg-white/80 px-4 h-10 rounded-md text-black border border-zinc-500">
                                <option value="">Todas as Categorias</option>
                                {categorias.map(cat => (
                                    <option key={cat._id} value={cat._id}>{cat.nome}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {alertaEstoque.length > 0 && (
        <div className="bg-red-200 text-red-800 p-2 rounded mb-2">
            Atenção: Estoque baixo para os produtos: {alertaEstoque.join(', ')}
        </div>
    )}

                    <div className="overflow-auto p-4 bg-zinc-100">
                        {produtos.length === 0 ? (
                            <div className="text-center text-zinc-500 py-8">
                                {categoriaFiltro
                                    ? `Sem produtos para a categoria "${categorias.find(c => c._id === categoriaFiltro)?.nome || ''}".`
                                    : 'Nenhum produto cadastrado.'}
                            </div>
                        ) : (
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
                                    <th className="border border-zinc-400 px-2 py-2">Categoria</th>
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
                                        <td className="border border-zinc-400 px-2 py-2">
                                            {p.categoria?.nome || '-'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )

}