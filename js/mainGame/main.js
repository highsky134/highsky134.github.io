import * as create from './create.js';
import * as init from './initGameData.js';
import { sonagiStart } from './gameStart.js';
import * as answer from './answerCheck.js';
import { gameData } from './gameData.js';

const $inputWord = document.getElementById('typing');
const $btn = document.getElementById('btn');

$btn.onmouseover=()=>{  
    $btn.innerText='게임 시작';
}
$btn.onmouseout=()=>{
    $btn.innerText="게임 준비";
}

// 게임 시작 버튼
$btn.onclick = () => { 
    $btn.onclick=null;
    $inputWord.focus();
    $btn.onmouseout = null;
    $btn.onmouseover = null;
    
    $btn.innerText = '게임 중...';
    init.gameLife();
    create.gameStart();
};

// 결과창의 다시하기 버튼
const $retryBtn = document.getElementById('retry');
$retryBtn.onclick = () => {
    // init.gameLife();
    const $showResult = document.querySelector('.result-container');
    $showResult.classList.remove('result-container-animation');
    // $showResult.setAttribute('style', 'z-index:-1000');

    const startContainer = document.querySelector('.start-container');
    startContainer.setAttribute('style','z-index:10000');
    
    window.location.reload();
    // create.gameStart();
};

