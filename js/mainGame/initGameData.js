import { gameData } from "./gameData.js";


const gameLife = () => {
    gameData.life = 5; 
    gameData.combo = 0;
    gameData.score = 0;
    gameData.correctArray = [];

    const $comboCount = document.getElementById('combo-score');
    $comboCount.textContent = gameData.combo;

    const $life = document.getElementById('life');
    $life.textContent = gameData.life;
    
    const $level = document.getElementById('level');
    $level.textContent = gameData.level;

    const $score = document.getElementById('score');
    $score.textContent = gameData.score;

    const $showResult = document.querySelector('.result-container');
    // $showResult.setAttribute('style', 'z-index:-1000;');

    const $resultBox = document.querySelector('.means');
    $resultBox.textContent = '';

    const $resultText = document.querySelector('.result-text');
    $resultText.innerHTML = '<p>맞춘 정답</p>';

    gameData.correctList =[];
    const $helpContainer = document.querySelector('.container .game-container .game-helpbox');
    $helpContainer.setAttribute('style', 'opacity:0;');


}

export {gameLife};