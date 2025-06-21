import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const CadastroMovimentacao = () => {
  const [produtos, setProdutos] = useState<any[]>([])
  const [fornecedores, setFornecedores] = useState<any[]>([])
  const [tipo, setTipo] = useState('entrada')
  const [produto, setProduto] = useState('')
  const [fornecedor, setFornecedor] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [observacoes, setObservacoes] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:5000/products').then(res => setProdutos(res.data))
    axios.get('http://localhost:5000/fornecedores').then(res => setFornecedores(res.data))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMensagem('')
    try {
      await axios.post('http://localhost:5000/movimentacoes/add', {
        tipo,
        produto,
        fornecedor: fornecedor || undefined,
        quantidade: Number(quantidade),
        observacoes
      })
      setMensagem('✅ Movimentação registrada com sucesso!')
      setTipo('entrada')
      setProduto('')
      setFornecedor('')
      setQuantidade('')
      setObservacoes('')
    } catch (error: any) {
      setMensagem('❌ ' + (error?.response?.data?.error || 'Erro ao registrar movimentação.'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <button onClick={() => navigate('/movimentacoes')} className="mb-4 text-gray-600 hover:text-gray-900">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold mb-6">Nova Movimentação</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <select name="tipo" value={tipo} onChange={e => setTipo(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 w-full" required>
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
          <select name="produto" value={produto} onChange={e => setProduto(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 w-full" required>
            <option value="" disabled>Selecione o produto</option>
            {produtos.map((p: any) => (
              <option key={p._id} value={p._id}>{p.nome}</option>
            ))}
          </select>
          <select name="fornecedor" value={fornecedor} onChange={e => setFornecedor(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 w-full">
            <option value="">(Opcional) Selecione o fornecedor</option>
            {fornecedores.map((f: any) => (
              <option key={f._id} value={f._id}>{f.nome}</option>
            ))}
          </select>
          <input type="number" name="quantidade" placeholder="Quantidade" value={quantidade} onChange={e => setQuantidade(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 w-full" required min={1} />
          <input type="text" name="observacoes" placeholder="Observações" value={observacoes} onChange={e => setObservacoes(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 w-full col-span-2" />
          <div className="col-span-2">
            <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              {loading ? 'Salvando...' : 'Registrar Movimentação'}
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

export default CadastroMovimentacao
