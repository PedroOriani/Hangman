import { useState } from "react";

export default function Start(props){
    const {classStart, setClassStart, setClassGame, setTema, palavras, animais, nba, series, lol, cep} = props

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

    function gameSeries() {
        setClassStart('none');
        setClassGame('App');
        temaSelecionado = series;
        setTema(temaSelecionado);
    }

    function gameLol() {
        setClassStart('none');
        setClassGame('App');
        temaSelecionado = lol;
        setTema(temaSelecionado);
    }

    function gameCep() {
        setClassStart('none');
        setClassGame('App');
        temaSelecionado = cep;
        setTema(temaSelecionado);
    }

    return(
        <div className={classStart}>
            <p className="welcome">Bem vindo ao melhor Jogo da Forca</p>
            <p className="welcome">Escolha um tema:</p>
            <div className="buttonTheme">
                <button onClick={gameGeral} className="chooseTheme">Geral</button>
                <button onClick={gameNBA} className="chooseTheme">NBA</button>
                <button onClick={gameAnimais} className="chooseTheme">Animais</button>
                <button onClick={gameSeries} className="chooseTheme">Series</button>
                <button onClick={gameLol} className="chooseTheme">LOL</button>
                <button onClick={gameCep} className="chooseTheme">Países e Capitais</button>
            </div> 
        </div>
    );
}