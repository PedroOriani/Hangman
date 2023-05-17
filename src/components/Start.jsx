import { useState } from "react";

export default function Start(props){
    const {classStart, setClassStart, setClassGame, setTema, palavras, animais, nba} = props

    let temaSelecionado;

    function gameGeral() {
        setClassStart('none');
        setClassGame('App');
        temaSelecionado = palavras;
        setTema(temaSelecionado);
    }

    function gameNBA() {
        setClassStart('none');
        setClassGame('App');
        temaSelecionado = nba;
        setTema(temaSelecionado);
    }

    function gameAnimais() {
        setClassStart('none');
        setClassGame('App');
        temaSelecionado = animais;
        setTema(temaSelecionado);
    }

    return(
        <div className={classStart}>
            <p className="welcome">Bem vindo ao melhor Jogo da Forca</p>
            <p className="welcome">Escolha um tema</p>
            <div className="buttonTheme">
                <button onClick={gameGeral} className="chooseTheme geral">Geral</button>
                <button onClick={gameNBA} className="chooseTheme nba">NBA</button>
                <button onClick={gameAnimais} className="chooseTheme animais">Animais</button>
            </div> 
        </div>
    );
}