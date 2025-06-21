import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Clientes } from './pages/Clientes';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Adicione a rota de clientes no seu sistema de rotas (exemplo com react-router-dom)
// <Route path="/clientes" element={<Clientes />} />
