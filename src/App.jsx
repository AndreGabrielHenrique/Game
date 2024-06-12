import React from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='App'>
        <h1>Donkey Kong</h1>
        <img src="https://mario.wiki.gallery/images/e/e0/Donkey_Kong_Arcade_side_art.png" alt="Donkey Kong" width="600" />
        <p>Donkey Kong é um jogo de arcade desenvolvido pela Nintendo, lançado em 1981.
          É um primeiro exemplo do gênero plataforma, uma vez que a jogabilidade foca na movimentação do personagem principal por uma série de plataformas enquanto desvia de obstáculos.</p>
        <button onClick={() => alert('Baixe a ROM de Donkey Kong grátis')}>Baixe a ROM</button>
      </div>
    </>
  )
}

export default App
