import { useState } from 'react';
import React from 'react';
  
export default function Jogo(props){
    const {classPerdeu, setClassPerdeu, tema, contandoPalavras, underlineWord, setUnderline, setUnderlineWord, palavraArray, setPalavraArray, setWord, gameOver, word, underline, classUnderline, setClassUnderline, image, setClassButton, setClicked, random, setRandom, setErrors, setClassStart, setClassGame} = props

    let palavraDireto;
    let wordDireto;
    let palavraArrayDireto;
    let underlineWordDireto;
    
    function randomize() {
        return Math.random() - 0.5;
      }

    function chooseWord(){
        setClicked([]);
        setClassButton('able');
        setClassUnderline('word');
        setClassPerdeu('none')
        setErrors(0)

        palavraDireto = tema.sort(randomize);
        setWord(palavraDireto[0].toUpperCase())
        wordDireto = (palavraDireto[0].toUpperCase())
        setPalavraArray(wordDireto.split(''))
        palavraArrayDireto = (wordDireto.split(''))
        setUnderlineWord(palavraArrayDireto.map(item =>{
            if (item === ' ') {
                return '- '
              } else {
                return '_ '
              }
        }));
        underlineWordDireto = (palavraArrayDireto.map(item =>{
            if (item === ' ') {
                return '- '
              } else {
                return '_ '
              }
        }));
        setUnderline(underlineWordDireto);

        console.log(wordDireto);
    }

    function return1() {
        setClassStart('Start');
        setClassGame('none');
        setClicked(contandoPalavras);
        setClassButton('able');
        setClassUnderline('none');
        setClassPerdeu('none');
        setErrors(0);
    }

    return(
        <div className='game'>
            <img className="gallows" src={image} data-teste='game-image'/>
            <button 
            onClick={chooseWord}
            className='chooseWord'
            data-teste='choose-word'>
            Escolher Palavra
            </button>
            <p className={classUnderline} data-test="word">{underline}</p>
            <button onClick={return1} className="return">Voltar aos Temas</button>
            <div
            className={classPerdeu}
            >Muito ruim Mlk KKKKKK</div> 
        </div>
    );
}