import TarologasLP from "./pages/lp-tarologas"
import ClientsLP from "./pages/lp-clients"
import { Routes, Route, Navigate } from 'react-router-dom'


function App() {
  return (
    <Routes>
      <Route path="/" element={<TarologasLP />} />
      <Route path="/clientes" element={<ClientsLP />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
