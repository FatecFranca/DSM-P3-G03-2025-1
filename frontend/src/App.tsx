import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Produtos } from "./pages/Produtos";
import { Usuarios } from "./pages/Usuarios";
import { Fornecedores } from "./pages/Fornecedores";
import { Movimentacoes } from "./pages/Movimentacoes";
import CadastroProduto from './components/CadastroProduto'
import CadastroFornecedor from './components/CadastroFornecedor'
import EditarFornecedor from './components/EditarFornecedor'
import CadastroMovimentacao from './components/CadastroMovimentacao'
import Categorias from './pages/Categorias'







export default function App() {
  

  return (
    <BrowserRouter>
      <Routes>
      <Route path = "*" element={<Home/>}/>
      <Route path = "/produtos" element={<Produtos/>}/>
      <Route path = "/usuarios" element={<Usuarios/>}/>
      <Route path = "/fornecedores" element={<Fornecedores/>}/>
      <Route path="/produtos/cadastrar" element={<CadastroProduto />} />
      <Route path="/fornecedores/cadastrar" element={<CadastroFornecedor />} />
      <Route path="/fornecedores/editar/:id" element={<EditarFornecedor />} />
      <Route path="/movimentacoes" element={<Movimentacoes/>}/>
      <Route path="/movimentacoes/cadastrar" element={<CadastroMovimentacao />} />
      <Route path="/categorias" element={<Categorias/>}/>
      </Routes>
    </BrowserRouter>
  )
}


