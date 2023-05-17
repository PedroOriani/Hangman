import React, { useState } from 'react';
import Game from "./Game";
import Start from './Start';

function App() {

  const [classStart, setClassStart] = useState ('Start')
  const [classGame, setClassGame] = useState ('none')

  return (
    <div className='body-game'>
    <Start
    classStart={classStart}
    setClassStart={setClassStart}
    setClassGame={setClassGame} 
    />
    <Game 
    classGame={classGame}
    setClassStart={setClassStart}
    setClassGame={setClassGame} 
    />
    </div>
    
  );
}

export default App;