import { useState, useEffect } from 'react';
import axios from 'axios';

export default function CadastroCliente() {
  const [cliente, setCliente] = useState({ nome: '', cpf: '', cnpj: '', email: '', telefone: '', endereco: '' });
  const [mensagem, setMensagem] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/clientes/add', cliente);
      setMensagem('Cliente cadastrado com sucesso!');
      setCliente({ nome: '', cpf: '', cnpj: '', email: '', telefone: '', endereco: '' });
    } catch (err: any) {
      setMensagem('Erro ao cadastrar cliente: ' + (err.response?.data?.error || 'Erro desconhecido'));
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Cadastro de Cliente</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input name="nome" placeholder="Nome" value={cliente.nome} onChange={handleChange} required className="border p-2 rounded" />
        <input name="cpf" placeholder="CPF" value={cliente.cpf} onChange={handleChange} className="border p-2 rounded" />
        <input name="cnpj" placeholder="CNPJ" value={cliente.cnpj} onChange={handleChange} className="border p-2 rounded" />
        <input name="email" placeholder="Email" value={cliente.email} onChange={handleChange} className="border p-2 rounded" />
        <input name="telefone" placeholder="Telefone" value={cliente.telefone} onChange={handleChange} className="border p-2 rounded" />
        <input name="endereco" placeholder="Endereço" value={cliente.endereco} onChange={handleChange} className="border p-2 rounded" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Cadastrar</button>
      </form>
      {mensagem && <div className="mt-2 text-sm">{mensagem}</div>}
    </div>
  );
}
