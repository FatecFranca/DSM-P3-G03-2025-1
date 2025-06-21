import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { Plus } from "lucide-react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

interface Categoria {
  _id: string;
  nome: string;
  descricao?: string;
  ativa: boolean;
}

export default function Categorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [novaCategoria, setNovaCategoria] = useState({ nome: '', descricao: '' });
  const [mensagem, setMensagem] = useState('');
  const [editando, setEditando] = useState<string | null>(null);
  const [editCategoria, setEditCategoria] = useState({ nome: '', descricao: '' });
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const carregarCategorias = () => {
    axios.get('http://localhost:5000/categorias')
      .then(res => setCategorias(res.data))
      .catch(() => setMensagem('Erro ao carregar categorias.'));
  };

  useEffect(() => {
    carregarCategorias();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNovaCategoria({ ...novaCategoria, [e.target.name]: e.target.value });
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditCategoria({ ...editCategoria, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/categorias/add', novaCategoria);
      setMensagem('Categoria cadastrada com sucesso!');
      setNovaCategoria({ nome: '', descricao: '' });
      carregarCategorias();
    } catch (err: any) {
      setMensagem('Erro ao cadastrar categoria: ' + (err.response?.data?.error || 'Erro desconhecido'));
    }
  };

  const handleEdit = (cat: Categoria) => {
    setEditando(cat._id);
    setEditCategoria({ nome: cat.nome, descricao: cat.descricao || '' });
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editando) return;
    try {
      await axios.put(`http://localhost:5000/categorias/${editando}`, editCategoria);
      setMensagem('Categoria editada com sucesso!');
      setEditando(null);
      carregarCategorias();
    } catch (err: any) {
      setMensagem('Erro ao editar categoria: ' + (err.response?.data?.error || 'Erro desconhecido'));
    }
  };

  const handleInativar = async (id: string) => {
    try {
      await axios.patch(`http://localhost:5000/categorias/${id}/inativar`);
      setMensagem('Categoria inativada!');
      carregarCategorias();
    } catch (err: any) {
      setMensagem('Erro ao inativar categoria: ' + (err.response?.data?.error || 'Erro desconhecido'));
    }
  };

  const handleAtivar = async (id: string) => {
    try {
      await axios.patch(`http://localhost:5000/categorias/${id}/ativar`);
      setMensagem('Categoria ativada!');
      carregarCategorias();
    } catch (err: any) {
      setMensagem('Erro ao ativar categoria: ' + (err.response?.data?.error || 'Erro desconhecido'));
    }
  };

  return (
    <div className="flex flex-col h-screen flex-1 bg-zinc-100 text-sm">
      <Header />
      <div className="flex flex-1">
        <NavBar />
        <div className="flex flex-col flex-1">
          <div className="flex w-full px-4 py-4 justify-between">
            <div className="flex gap-2">
              <button className="flex bg-zinc-500 px-4 h-10 rounded-md items-center gap-1 text-white" onClick={() => setShowForm(!showForm)}>
                <Plus />
                Nova Categoria
              </button>
            </div>
          </div>
          <div className="overflow-auto p-4 bg-zinc-100">
            {mensagem && <div className="mb-2 text-sm text-green-700">{mensagem}</div>}
            {showForm && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4 bg-zinc-100 p-4 rounded">
                <input name="nome" placeholder="Nome" value={novaCategoria.nome} onChange={handleChange} required className="border p-2 rounded" />
                <input name="descricao" placeholder="Descrição" value={novaCategoria.descricao} onChange={handleChange} className="border p-2 rounded" />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Cadastrar</button>
              </form>
            )}
            <table className="min-w-full border border-zinc-400 text-sm text-black/80">
              <thead className="bg-zinc-100">
                <tr>
                  <th className="border border-zinc-400 px-2 py-2">Nome</th>
                  <th className="border border-zinc-400 px-2 py-2">Descrição</th>
                  <th className="border border-zinc-400 px-2 py-2">Ativa</th>
                  <th className="border border-zinc-400 px-2 py-2">Ações</th>
                </tr>
              </thead>
              <tbody>
                {categorias.map(cat => (
                  <tr key={cat._id}>
                    <td className="border border-zinc-400 px-2 py-2">
                      {editando === cat._id ? (
                        <input name="nome" value={editCategoria.nome} onChange={handleEditChange} className="border p-1 rounded" />
                      ) : (
                        cat.nome
                      )}
                    </td>
                    <td className="border border-zinc-400 px-2 py-2">
                      {editando === cat._id ? (
                        <input name="descricao" value={editCategoria.descricao} onChange={handleEditChange} className="border p-1 rounded" />
                      ) : (
                        cat.descricao
                      )}
                    </td>
                    <td className="border border-zinc-400 px-2 py-2">{cat.ativa ? 'Sim' : 'Não'}</td>
                    <td className="border border-zinc-400 px-2 py-2">
                      {editando === cat._id ? (
                        <button onClick={handleEditSubmit} className="bg-green-500 text-white px-2 py-1 rounded mr-2">Salvar</button>
                      ) : (
                        <button onClick={() => handleEdit(cat)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Editar</button>
                      )}
                      {cat.ativa ? (
                        <button onClick={() => handleInativar(cat._id)} className="bg-red-500 text-white px-2 py-1 rounded">Inativar</button>
                      ) : (
                        <button onClick={() => handleAtivar(cat._id)} className="bg-green-500 text-white px-2 py-1 rounded">Ativar</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
