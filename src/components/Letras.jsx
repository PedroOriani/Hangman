import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function Letras(props){
    const {setClassPerdeu, setGameOver, underline, setUnderline, classButton, errors, setErrors, clicked, setClicked, word, setClassUnderline, contandoPalavras} = props;
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let contErrors;
    let newArr =[...underline];

    const [text, setText] = useState('');
    const [finalGuess, setFinalGuess] = useState([]);

    const charactersA = ['Á', 'Ã', 'À', 'Â'];
    const charactersE = ['É', 'Ê'];
    const charactersI = ['Í'];
    const charactersO = ['Ô', 'Õ', 'Ó'];
    const charactersU = ['Ú'];
    const charactersC = ['Ç'];

    function disableClicked(i){
        setClicked([...clicked, i]);
        verifyLetter(i);
    }

    function verifyLetter(i) {
        for (let j = 0; j < word.length; j++){
            if(alfabeto[i].toUpperCase() === 'A' && charactersA.includes(word[j].toUpperCase())){
                newArr[j] = word[j].toUpperCase();
            }else if(alfabeto[i].toUpperCase() === 'E' && charactersE.includes(word[j].toUpperCase())){
                newArr[j] = word[j].toUpperCase();
            }else 
            if(alfabeto[i].toUpperCase() === 'I' && charactersI.includes(word[j].toUpperCase())){
                newArr[j] = word[j].toUpperCase();
            }else if(alfabeto[i].toUpperCase() === 'O' && charactersO.includes(word[j].toUpperCase())){
                newArr[j] = word[j].toUpperCase();
            }else if(alfabeto[i].toUpperCase() === 'U' && charactersU.includes(word[j].toUpperCase())){
                newArr[j] = word[j].toUpperCase();
            }else if(alfabeto[i].toUpperCase() === 'C' && charactersC.includes(word[j].toUpperCase())){
                newArr[j] = word[j].toUpperCase();
            }else if(word[j].toUpperCase() === alfabeto[i].toUpperCase()){
                newArr[j] = word[j].toUpperCase();
            }else if (!word.includes(alfabeto[i].toUpperCase())){
                contErrors = errors + 1
                setErrors(contErrors)
            }
        }
        setUnderline(newArr);        
        verifyGame();
    }

    function verifyGame(){
        if(!newArr.includes('_ ')){
            setClassUnderline('word green');
            setClicked(contandoPalavras)
            setGameOver(1)
        }else if(contErrors === 6){
            setUnderline(word)
            setClassUnderline('word red');
            setClassPerdeu('frase-perdida')
            setClicked(contandoPalavras)
            setGameOver(1)
        }
    }

    // ----------------------- Guessing --------------------- //

    function verifyGuess (guess){
        if(word.length !== guess.length){
            Swal.fire({
                title: "NOT LIKE THAT!",
                text: "Digite a quantidade exata de letras, considerando os espaços \n Lembre-se: de utilizar apenas as letras disponiveis de A-Z",
                imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/5eeea355389655.59822ff824b72.gif',
                confirmButtonText: "Ok"
              });
        }else{
            verifyGuessWord(guess);
            clear();
        }   
    }

    function verifyGuessWord(guess) {
        const guessWords = guess.toUpperCase().split(' ');
        const guessArray = [];
        for (let i = 0; i < guessWords.length; i++){
            guessArray.push(guessWords[i].split(''))
            if (i !== guessWords.length - 1){
                guessArray.push(' ')
            }      
        }
        const guessJoin = guessArray.join('');
        let finalGuess = '';
        for (let i = 0; i < guessJoin.length; i++){
            if (guessJoin[i] !== ','){
                finalGuess += guessJoin[i];
            }
        }
        verifyGuessGame(finalGuess);
    }

    function verifyGuessGame(guess) {
        let valor = 1
        for (let i = 0; i < word.length; i++){
            if (guess[i] === 'A' && charactersA.includes(word[i])) {
                valor = 1
            }else if (guess[i] === 'E' && charactersE.includes(word[i])) {
                valor = 1
            }else if (guess[i] === 'I' && charactersI.includes(word[i])) {
                valor = 1
            }else if (guess[i] === 'O' && charactersO.includes(word[i])) {
                valor = 1
            }else if (guess[i] === 'U' && charactersU.includes(word[i])) {
                valor = 1
            }else if (guess[i] === 'C' && charactersC.includes(word[i])) {
                valor = 1
            }else if (word[i] !== guess[i]) {
                valor = 0
            }
        }

        if(valor === 1){
            setUnderline(word)
            setClassUnderline('word green');
            setClicked(contandoPalavras)
            setGameOver(1)
        }else if(valor === 0){
            setUnderline(word)
            setClassUnderline('word red');
            setClassPerdeu('frase-perdida')
            setClicked(contandoPalavras)
            setGameOver(1)
        }

    }

    function clear() {
        const clear = '';
        setText(clear);
    }

    // ----------------------- Guessing --------------------- //
    return(
        <>
            <div className="alfabet">
                {alfabeto.map((letter, index) => (
                    <button
                        disabled={clicked.includes(index) ? true : false}
                        onClick={() => disableClicked(index)}
                        className={`letter ${classButton} ${clicked.includes(index) ? 'disabled' : 'able'}`}
                        data-test="letter"
                        key={index}>
                        {letter.toUpperCase()}
                    </button>
                ))
                }
            </div>
            <input 
            className="guessing" 
            type='text' 
            placeholder="Digite seu chute..."
            value={text}
            onChange={e => setText(e.target.value)}
            ></input>
            <button className="guess" onClick={() => verifyGuess(text)}>Guess</button>
        </>
    );

    console.log(errors)
}