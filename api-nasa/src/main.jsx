import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ImageComponent from './components/ImageComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ImageComponent/>
  </StrictMode>,
)


/**
 * Nome do arquivo: main.jsx
 * Data de criação: 26/11/2024
 * Autor: José Aldenir Almeida Gomes Filho
 * Matrícula: 01697549
 *
 * Descrição:
 * Este file React é responsável pela exibição de components na tela, quaisquer componente
 * que eu vir a criar eu posiciono dentro do StrictMode, 
 */