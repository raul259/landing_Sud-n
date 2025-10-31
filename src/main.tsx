import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "@/components/theme-provider" // <-- 1. IMPORTA EL TEMA

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* ▼▼ 2. ENVUELVE TODO CON EL PROVEEDOR DE TEMA ▼▼ */}
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <BrowserRouter> 
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)