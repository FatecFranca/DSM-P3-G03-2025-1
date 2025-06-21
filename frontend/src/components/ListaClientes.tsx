import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ListaClientes() {
  const [clientes, setClientes] = useState<any[]>([]);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/clientes')
      .then(res => setClientes(res.data))
      .catch(() => setMensagem('Erro ao carregar clientes.'));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Lista de Clientes</h2>
      {mensagem && <div className="mb-2 text-sm text-red-500">{mensagem}</div>}
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Nome</th>
            <th className="border p-2">CPF</th>
            <th className="border p-2">CNPJ</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Telefone</th>
            <th className="border p-2">Endereço</th>
            <th className="border p-2">Ativo</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => (
            <tr key={cliente._id}>
              <td className="border p-2">{cliente.nome}</td>
              <td className="border p-2">{cliente.cpf}</td>
              <td className="border p-2">{cliente.cnpj}</td>
              <td className="border p-2">{cliente.email}</td>
              <td className="border p-2">{cliente.telefone}</td>
              <td className="border p-2">{cliente.endereco}</td>
              <td className="border p-2">{cliente.ativo ? 'Sim' : 'Não'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
