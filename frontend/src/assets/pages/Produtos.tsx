import { ArrowUp, Plus } from "lucide-react";
import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";

type Product = {
    codigo: number;
    nome: string;
    variacoes: string;
    ipi: string;
    estoque: number;
    comissao: string;
    precoTabela: string;
    preco2024: string;
    precoAtacado: string;
    precoDesconto: string;
    precoEcommerce: string;
};

const products: Product[] = [
    {
        codigo: 15696,
        nome: "VELA AQUECEDORA",
        variacoes: "12v",
        ipi: "7%",
        estoque: 0,
        comissao: "--",
        precoTabela: "US$ 81,03",
        preco2024: "US$ 89,133",
        precoAtacado: "US$ 64,824",
        precoDesconto: "US$ 76,9785",
        precoEcommerce: "US$ 68,8755",
    },
    {
        codigo: 10,
        nome: "TWISTER TRASEIRO PRI",
        variacoes: "130 x 70 - 17",
        ipi: "--",
        estoque: -27,
        comissao: "--",
        precoTabela: "R$ 120,00",
        preco2024: "R$ 132,00",
        precoAtacado: "R$ 96,00",
        precoDesconto: "R$ 114,00",
        precoEcommerce: "R$ 102,00",
    },
    {
        codigo: 42,
        nome: "17 CROSS PRIME PNE",
        variacoes: "748 110 X 90",
        ipi: "--",
        estoque: 1000,
        comissao: "7%",
        precoTabela: "R$ 130,00",
        preco2024: "R$ 143,00",
        precoAtacado: "R$ 104,00",
        precoDesconto: "R$ 123,50",
        precoEcommerce: "R$ 110,50",
    },
    {
        codigo: 48,
        nome: "19 CROSS PRIME",
        variacoes: "749 - 80 x 100",
        ipi: "--",
        estoque: -60,
        comissao: "--",
        precoTabela: "R$ 120,00",
        preco2024: "R$ 132,00",
        precoAtacado: "R$ 96,00",
        precoDesconto: "R$ 114,00",
        precoEcommerce: "R$ 102,00",
    },
];

export function Produtos() {
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
                                {products.map((p, index) => (
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
                                            {p.ipi}
                                        </td>
                                        <td
                                            className={`border border-zinc-400 px-2 py-2 text-center ${p.estoque < 0 ? "text-red-500" : ""
                                                }`}
                                        >
                                            {p.estoque}
                                        </td>
                                        <td className="border border-zinc-400 px-2 py-2 text-center">
                                            {p.comissao}
                                        </td>
                                        <td className="border border-zinc-400 px-2 py-2 text-center">
                                            {p.precoTabela}
                                        </td>
                                        <td className="border border-zinc-400 px-2 py-2 text-center">
                                            {p.preco2024}
                                        </td>
                                        <td className="border border-zinc-400 px-2 py-2 text-center">
                                            {p.precoAtacado}
                                        </td>
                                        <td className="border border-zinc-400 px-2 py-2 text-center">
                                            {p.precoDesconto}
                                        </td>
                                        <td className="border border-zinc-400 px-2 py-2 text-center">
                                            {p.precoEcommerce}
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