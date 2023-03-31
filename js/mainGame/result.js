import {gameData} from './gameData.js'


// 결과창 내용 보여주기
const endGame = () => {

    // 게임 종료시 맞춘 정답들 출력
    const $resultText = document.querySelector('.result-text');
    $resultText.innerHTML = '<p>맞춘 정답</p>' + gameData.correctList;
    
    // 게임 종료시 유저정보(콤보, 점수) 보여주기
    const $name = document.querySelector('.name');
    $name.innerHTML =  gameData.userName + '님의 기록<br>Combo : ' + gameData.highCombo 
    + '<br>Score : ' + gameData.score;


};

export {endGame};