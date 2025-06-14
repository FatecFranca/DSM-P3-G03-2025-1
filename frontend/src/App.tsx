import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Produtos } from "./pages/Produtos";
import { Usuarios } from "./pages/Usuarios";

export default function App() {
  

  return (
    <BrowserRouter>
      <Routes>
      <Route path = "*" element={<Home/>}/>
      <Route path = "/produtos" element={<Produtos/>}/>
      <Route path = "/usuarios" element={<Usuarios/>}/>
      </Routes>
    </BrowserRouter>
  )
}


