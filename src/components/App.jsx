import React, { useState } from 'react';
import Game from "./Game";
import Start from './Start';
import palavras from '../palavras'
import animais from '../animais'
import nba from '../nba'
import series from '../series'
import lol from '../lol'

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