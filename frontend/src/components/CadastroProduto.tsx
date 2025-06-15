// src/pages/CadastroProduto.tsx

import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

type Produto = {
  codigo: number
  nome: string
  variacoes?: string
  ipi?: string
  estoque?: number
  comissao?: string
  precoTabela?: string
  preco2024?: string
  precoAtacado?: string
  precoDesconto?: string
  precoEcommerce?: string
}

const placeholders: Record<string, string> = {
  codigo: 'Código',
  nome: 'Nome',
  variacoes: 'Variações',
  ipi: 'IPI',
  estoque: 'Estoque',
  comissao: 'Comissão',
  precoTabela: 'Preço Tabela',
  preco2024: 'Preço 2024',
  precoAtacado: 'Preço Atacado',
  precoDesconto: 'Preço Desconto',
  precoEcommerce: 'Preço Ecommerce',
}

const CadastroProduto = () => {

  const [produto, setProduto] = useState<Record<string, string>>({
    codigo: '',
    nome: '',
    variacoes: '',
    ipi: '',
    estoque: '',
    comissao: '',
    precoTabela: '',
    preco2024: '',
    precoAtacado: '',
    precoDesconto: '',
    precoEcommerce: '',
  })

  const [loading, setLoading] = useState(false)
  const [mensagem, setMensagem] = useState('')
  const navigate = useNavigate()


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProduto(prev => ({
      ...prev,
      [name]: value,
    }))
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMensagem('')


    const produtoParaEnviar: Produto = {
      codigo: Number(produto.codigo),
      nome: produto.nome,
      variacoes: produto.variacoes,
      ipi: produto.ipi,
      estoque: produto.estoque ? Number(produto.estoque) : undefined,
      comissao: produto.comissao,
      precoTabela: produto.precoTabela,
      preco2024: produto.preco2024,
      precoAtacado: produto.precoAtacado,
      precoDesconto: produto.precoDesconto,
      precoEcommerce: produto.precoEcommerce,
    }

    try {
      await axios.post('http://localhost:5000/products/add', produtoParaEnviar)
      setMensagem('✅ Produto cadastrado com sucesso!')
   
      setProduto({
        codigo: '',
        nome: '',
        variacoes: '',
        ipi: '',
        estoque: '',
        comissao: '',
        precoTabela: '',
        preco2024: '',
        precoAtacado: '',
        precoDesconto: '',
        precoEcommerce: '',
      })
    } catch (error) {
      console.error(error)
      setMensagem('❌ Erro ao cadastrar produto.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <button onClick={() => navigate('/produtos')} className="mb-4 text-gray-600 hover:text-gray-900">
          <ArrowLeft size={24} />
        </button>

        <h1 className="text-2xl font-bold mb-6">Cadastro de Produto</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {Object.entries(placeholders).map(([name, placeholder]) => (
            <input
              key={name}
              type="text"
              name={name}
              placeholder={placeholder}
              value={produto[name]}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              required={name === 'codigo' || name === 'nome'}
            />
          ))}

          <div className="col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              {loading ? 'Salvando...' : 'Cadastrar Produto'}
            </button>

            {mensagem && (
              <p className={`mt-4 text-center text-sm ${mensagem.startsWith('✅') ? 'text-green-600' : 'text-red-600'}`}>
                {mensagem}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default CadastroProduto
