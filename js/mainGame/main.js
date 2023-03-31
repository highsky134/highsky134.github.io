
// import { gameData } from './gameData.js';
import * as create from './create.js';
import * as answer from './answerCheck.js';
import { gameData } from './gameData.js';
import * as init from './initGameData.js';
import { sonagiStart } from './gameStart.js';
/*

1. 단어를 생성을 해서 떨어뜨림
ㄴ 난이도 임시로 1배속


const idx = post.findIndex(obj => obj.title === '세 번째');

console.log(idx);
console.log(post[idx]);

*/

// setInterval(()=>{
//     setTimeout(()=>{
//         console.log('ㅎㅇㅎㅇ');
//     }, Math.random()*5000)
// }, 2000);

//게임시작 버튼







const $inputWord = document.getElementById('typing');
const $btn = document.getElementById('btn');

$btn.onmouseover=()=>{  
    $btn.innerText='게임 시작';
}
$btn.onmouseout=()=>{
    $btn.innerText="게임 준비";
}

$btn.onclick = () => { 
    $btn.onclick=null;
    $inputWord.focus();
    $btn.onmouseout = null;
    $btn.onmouseover = null;
    
    $btn.innerText = '게임 중...';
    init.gameLife();
    create.gameStart();
    // setTimeout(()=> {
    //     $btn.removeEventListener
    // },2000);
};

// 다시하기 버튼
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

