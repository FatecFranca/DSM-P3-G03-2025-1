import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Produtos } from "./pages/Produtos";
import { Usuarios } from "./pages/Usuarios";
import CadastroProduto from './components/CadastroProduto'







export default function App() {
  

  return (
    <BrowserRouter>
      <Routes>
      <Route path = "*" element={<Home/>}/>
      <Route path = "/produtos" element={<Produtos/>}/>
      <Route path = "/usuarios" element={<Usuarios/>}/>
      <Route path="/produtos/cadastrar" element={<CadastroProduto />} />
      
      </Routes>
    </BrowserRouter>
  )
}


