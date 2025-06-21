import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const placeholders: Record<string, string> = {
  nome: 'Nome',
  cnpj: 'CNPJ',
  cpf: 'CPF',
  contato: 'Contato',
  email: 'E-mail',
  endereco: 'Endereço',
}

const CadastroFornecedor = () => {
  const [fornecedor, setFornecedor] = useState<Record<string, string>>({
    nome: '',
    cnpj: '',
    cpf: '',
    contato: '',
    email: '',
    endereco: '',
  })
  const [loading, setLoading] = useState(false)
  const [mensagem, setMensagem] = useState('')
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFornecedor(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMensagem('')
    try {
      await axios.post('http://localhost:5000/fornecedores/add', fornecedor)
      setMensagem('✅ Fornecedor cadastrado com sucesso!')
      setFornecedor({ nome: '', cnpj: '', cpf: '', contato: '', email: '', endereco: '' })
    } catch (error) {
      setMensagem('❌ Erro ao cadastrar fornecedor.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <button onClick={() => navigate('/fornecedores')} className="mb-4 text-gray-600 hover:text-gray-900">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold mb-6">Cadastro de Fornecedor</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {Object.entries(placeholders).map(([name, placeholder]) => (
            <input
              key={name}
              type="text"
              name={name}
              placeholder={placeholder}
              value={fornecedor[name]}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              required={name === 'nome'}
            />
          ))}
          <div className="col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              {loading ? 'Salvando...' : 'Cadastrar Fornecedor'}
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

export default CadastroFornecedor
