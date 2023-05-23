import React from 'react';

export default function Letras(props){
    const {setClassPerdeu, setGameOver, underline, setUnderline, classButton, errors, setErrors, clicked, setClicked, word, setClassUnderline, contandoPalavras} = props;
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let contErrors;
    let newArr =[...underline];

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
   
    return(
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
    );

    console.log(errors)
}