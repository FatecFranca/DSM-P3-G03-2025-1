import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./assets/pages/Home";
import { Produtos } from "./assets/pages/Produtos";

export default function App() {
  

  return (
    <BrowserRouter>
      <Routes>
      <Route path = "*" element={<Home/>}/>
      <Route path = "/produtos" element={<Produtos/>}/>
      </Routes>
    </BrowserRouter>
  )
}


