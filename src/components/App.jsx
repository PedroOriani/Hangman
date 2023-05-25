import React, { useState } from 'react';
import Game from "./Game";
import Start from './Start';
import palavras from '../mocks/palavras'
import animais from '../mocks/animais'
import nba from '../mocks/nba'
import series from '../mocks/series'
import lol from '../mocks/lol'
import cep from '../mocks/cep'

function App() {

  const [classStart, setClassStart] = useState ('Start')
  const [classGame, setClassGame] = useState ('none')
  const [tema, setTema] = useState ('')

  console.log(tema)

  return (
    <div className='body-game'>
    <Start
    classStart={classStart}
    setClassStart={setClassStart}
    setClassGame={setClassGame}
    setTema={setTema}
    palavras={palavras}
    animais={animais}
    nba={nba}
    series={series}
    lol={lol}
    cep={cep}
    />
    <Game 
    classGame={classGame}
    setClassStart={setClassStart}
    setClassGame={setClassGame} 
    tema={tema}
    />
    </div>
    
  );
}

export default App;