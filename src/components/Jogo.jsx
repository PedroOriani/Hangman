import React from 'react';
import palavras from '../palavras';
  
export default function Jogo(props){
    const {underlineWord, setUnderline, setUnderlineWord, palavraArray, setPalavraArray, setWord, gameOver, word, underline, classUnderline, setClassUnderline, image, setButtonDisabled, setClassButton, setClicked, random, setRandom, setErrors, setClassStart, setClassGame} = props

    let palavraDireto;
    let wordDireto;
    let palavraArrayDireto;
    let underlineWordDireto;
    
    function randomize() {
        return Math.random() - 0.5;
      }

    function chooseWord(){
        setButtonDisabled(false);
        setClicked([]);
        setClassButton('able');
        setClassUnderline('word');
        setErrors(0)
        setRandom(random + 1);

        palavraDireto = palavras.sort(randomize);
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
            // if(gameOver === 1){
                
            // }
    }

    function return1() {
        setClassStart('Start');
        setClassGame('none');
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
            <button onClick={return1} className="return">Voltar aos temas</button>    
        </div>
    );
}