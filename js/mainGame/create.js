import {quizList} from './quizList.js'
import { gameData } from './gameData.js';
import { endGame } from './result.js';

const $layerArray = [];
let idx = Math.floor(Math.random()*quizList.length);


// 랜덤으로 생성하는 함수!
const randomCreate = () => {    
    let n = Math.floor(Math.random()*10)+1;
    const $layer = document.querySelector(`.layer:nth-child(${n})`);
    const $newLayer = document.createElement('div');
    console.log(idx);
    idx = idx + Math.floor(Math.random()*5)+1;
    if(idx >= quizList.length) idx = 0;
    console.log(idx);
    let fruit = gameData.words[idx];
    $newLayer.setAttribute('style', 'position:absolute');
    $newLayer.setAttribute('data-words', fruit);
    // console.log(fruit + ' ' + idx);
    $newLayer.textContent = fruit;    
    // $layerMeans.push = fruit.mean;
    $newLayer.classList.add('fall','shadow');
    $layer.appendChild($newLayer);
    return $newLayer;
};

// 1.5초 간격마다 단어 생성을 하는 함수를 실행
// 10초가 지나면 충돌 판정이 일어났는지 체크를 함!!(조정)
const gameStart = () => {
  const randomInterval = setInterval(()=> {

    // if(!gameData.words[idx+1]) clearInterval(randomInterval);
     setTimeout(()=>{
      const $layer =  randomCreate();
      $layerArray.push($layer);
      setTimeout(()=>{
        // console.log($layer.getBoundingClientRect().y);
        if($layer.getBoundingClientRect().y > 550){
          console.log('충돌!!');

          const $typing = document.getElementById('typing');
          // $typing.setAttribute('style', 'border:10px solid red');
          $typing.classList.add('redline');
          setTimeout(()=>{
            $typing.classList.remove('redline');
          }, 400);
          

          $layer.classList.remove('shadow');                  
          --gameData.life;
          const $gameLife = document.getElementById('life');
          $gameLife.textContent = gameData.life;
          if(gameData.highCombo<gameData.combo){ 
            gameData.highCombo = gameData.combo;
          }
          gameData.combo=0;
          const $comboCount = document.getElementById('combo-score');
          $comboCount.innerText=0;
          
          // 목숨 0 판단 - 결과창 
          if (gameData.life === 0){
            const $mainBox = document.querySelector('.container');
            // $mainBox.classList.add('fade-in-two');
            setTimeout(()=>{
              const $showResult = document.querySelector('.result-container');
              // $showResult.setAttribute('style', 'z-index:10005');
              $showResult.classList.add('result-container-animation');
            },1000);
            

            const $resultBox = document.querySelector('.means');
            clearInterval(randomInterval);


            const $reset = [...document.querySelectorAll('.fall')];
            $reset.forEach(($remove) => {
              $remove.remove();
            });

            gameData.correctArray.forEach((word) => {
              $resultBox.innerHTML += word +'<br>';
            });

            // 결과창
            endGame();
          }
        }
      }, 5000);
    }, Math.random()*(gameData.velocity));
  }, gameData.velocity);
}

export {gameStart, $layerArray};
