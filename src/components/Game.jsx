import React from 'react';
import { useState } from "react";
import Jogo from "./Jogo";
import Letras from "./Letras";
import forca0 from '../assets/forca0.png'
import forca1 from '../assets/forca1.png'
import forca2 from '../assets/forca2.png'
import forca3 from '../assets/forca3.png'
import forca4 from '../assets/forca4.png'
import forca5 from '../assets/forca5.png'
import forca6 from '../assets/forca6.png'

export default function Game(props){
    const {classGame, setClassStart, setClassGame, tema} = props;
    const images = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

    const [classPerdeu, setClassPerdeu] = useState('none')

    const [word, setWord] = useState('');
  
    const [palavraArray, setPalavraArray] = useState(word.split(''))
    const [underlineWord, setUnderlineWord] = useState(palavraArray.map(() => '_ '));
  
    //Variáveis de Estado
    const [contandoPalavras, setContandoPalavras] = useState([])
    const [underline, setUnderline] = useState(underlineWord);
    const [classUnderline, setClassUnderline] = useState('none')
    const [errors, setErrors] = useState(0);
    const [clicked, setClicked] = useState(contandoPalavras)
    const [gameOver, setGameOver] = useState(0)
  
    for(let i = 0; i < tema.length; i++){
      contandoPalavras.push(i)
    }
  
    //buttons
  
    const [classButton, setClassButton] = useState('disabled');

    return (
        <div className={classGame}>
      <Jogo
        underlineWord={underlineWord}
        setPalavraArray={setPalavraArray}
        setUnderlineWord={setUnderlineWord}
        palavraArray={palavraArray}
        setUnderline={setUnderline}
        word={word}
        underline={underline}
        classUnderline={classUnderline}
        setClassUnderline={setClassUnderline}
        image={images[errors]}
        setClassButton={setClassButton}
        setClicked={setClicked}
        setErrors={setErrors}
        gameOver={gameOver}
        setWord={setWord}
        setClassStart={setClassStart}
        setClassGame={setClassGame}
        contandoPalavras={contandoPalavras}
        tema={tema}
        classPerdeu={classPerdeu}
        setClassPerdeu={setClassPerdeu}
      />
      <div className="Letras">
        <Letras
          underline={underline}
          setUnderline={setUnderline}
          classButton={classButton}
          errors={errors}
          setErrors={setErrors}
          clicked={clicked}
          setClicked={setClicked}
          word={word}
          setClassUnderline={setClassUnderline}
          contandoPalavras={contandoPalavras}
          setGameOver={setGameOver}
          setClassPerdeu={setClassPerdeu}
        />
      </div>
    </div>
    );
}