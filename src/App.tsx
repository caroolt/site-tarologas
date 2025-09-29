import { useState } from 'react'
import Botao from './components/Botao'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-white-100 text-black-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-black-100 mb-8 font-blackmango">
          Site Tarólogas
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card com cor vermelha */}
          <div className="bg-red-100 text-white-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Card Vermelho</h2>
            <p className="text-sm opacity-90">Usando a cor red-100 do design system</p>
          </div>
          
          {/* Card com cor verde */}
          <div className="bg-green-80 text-white-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Card Verde</h2>
            <p className="text-sm opacity-90">Usando a cor green-80 do design system</p>
          </div>
          
          {/* Card com cor preta */}
          <div className="bg-black-100 text-white-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Card Preto</h2>
            <p className="text-sm opacity-90">Usando a cor black-100 do design system</p>
          </div>
        </div>
        
        <div className="bg-white-100 border-2 border-red-60 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-black-100 mb-4">
            Demonstração das Cores
          </h2>
          <div className="flex flex-col gap-4 items-center">
            <Botao 
              variant="primario" 
              onClick={() => setCount((count) => count + 1)}
            >
              Contador: {count}
            </Botao>
            
            <div className="flex gap-4 flex-wrap justify-center">
              <Botao variant="primario">
                Botão Primário
              </Botao>
              
              <Botao variant="secundario">
                Botão Secundário
              </Botao>
              
              <Botao variant="variante3">
                Variante 3
              </Botao>
            </div>
          </div>
          <p className="mt-4 text-black-80 font-worksans">
            Este projeto está configurado com as cores do seu design system do Figma!
          </p>
          
          <div className="mt-6 space-y-4">
            <h3 className="text-lg font-semibold text-black-100 font-blackmango">
              Demonstração das Fontes:
            </h3>
            <div className="bg-black-100 p-4 rounded-lg">
              <p className="font-worksans font-light text-white-100">WorkSans Light</p>
              <p className="font-worksans font-normal text-white-100">WorkSans Regular</p>
              <p className="font-worksans font-medium text-white-100">WorkSans Medium</p>
              <p className="font-worksans font-semibold text-white-100">WorkSans SemiBold</p>
              <p className="font-worksans font-bold text-white-100">WorkSans Bold</p>
            </div>
            <div className="bg-red-100 p-4 rounded-lg">
              <p className="font-blackmango font-normal text-white-100 text-2xl">BlackMango Regular</p>
              <p className="font-blackmango font-bold text-white-100 text-2xl">BlackMango Bold</p>
              <p className="font-blackmango font-black text-white-100 text-2xl">BlackMango Black</p>
              <p className="text-white-100 text-sm mt-2">Teste: Se você vê esta fonte diferente, a BlackMango está funcionando!</p>
              <p className="text-white-100 text-xs mt-1 opacity-75">Se não estiver funcionando, vamos usar uma fonte alternativa</p>
              <p className="text-white-100 text-sm mt-2 font-inter">Teste com Inter: Esta fonte deve estar funcionando!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
