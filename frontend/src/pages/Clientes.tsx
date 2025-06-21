import CadastroCliente from '../components/CadastroCliente';
import ListaClientes from '../components/ListaClientes';

export function Clientes() {
  return (
    <div className="flex flex-col h-screen flex-1 bg-zinc-100 text-sm">
      <CadastroCliente />
      <ListaClientes />
    </div>
  );
}