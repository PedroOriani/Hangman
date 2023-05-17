import { useState } from "react";

export default function Start(props){
    const {classStart, setClassStart, setClassGame} = props

    function game() {
        setClassStart('none');
        setClassGame('App');
    }
    return(
        <div className={classStart}>
            <p className="welcome">Bem vindo ao melhor Jogo da Forca</p>
            <div className="buttonTheme">
                <button onClick={game} className="chooseTheme geral">Geral</button>
                <button onClick={game} className="chooseTheme nba">NBA</button>
                <button onClick={game} className="chooseTheme animais">Animais</button>
            </div> 
        </div>
    );
}