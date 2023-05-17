import React, { useState } from 'react';
import Game from "./Game";
import Start from './Start';

function App() {

  const [classStart, setClassStart] = useState ('none')
  const [classGame, setClassGame] = useState ('App')

  return (
    <div className='body-game'>
    <Start
    classStart={classStart}
    setClassStart={setClassStart}
    setClassGame={setClassGame} 
    />
    <Game 
    classGame={classGame}
    />
    </div>
    
  );
}

export default App;