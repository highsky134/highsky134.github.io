import {gameData} from './gameData.js';


const sonagiStart = document.querySelector('.start-button').addEventListener('click', e => {    
    // console.log('hihi');
    // document.querySelector('.start-name').value;
    const userName = document.querySelector('.start-name').value;
    const startContainer = document.querySelector('.start-container');
    const $helpContainer = document.querySelector('.container .game-container .game-helpbox');
    $helpContainer.setAttribute('style', 'opacity:1;');
    // console.log(userName);
    // console.log(document.getElementsByName('start-level'));
    
    // 이름 입력칸을 비워놓고 시작하면 GUEST 설정
    if(userName===''){
        gameData.userName = 'Guest';
    } else {
        gameData.userName = userName;
    }
    const $helpName = document.getElementById('help-id');
    $helpName.textContent = gameData.userName;
    // console.log(gameData.userName);

    const levelIs = document.getElementsByName('start-level');
    // 난이도 0 : 쉬움, 1: 중간, 2: 어려움
    if(levelIs[0].checked){       
        gameData.level = 'easy'  
        gameData.velocity = 1850;
    }
    if(levelIs[1].checked){
        gameData.level = 'normal'
        gameData.velocity = 1450;
    }
    if(levelIs[2].checked){  
        gameData.level = 'hard'
        gameData.velocity = 900;
    }
  // console.log(gameData.velocity);
  startContainer.classList.add('start-container-animation');
  
  setTimeout(()=>{
    startContainer.setAttribute('style', 'z-index: -1000; background:transparent;');
    // document.querySelector('.main-box').setAttribute('style', 'z-index: -10000;');
    startContainer.classList.remove('result-container-animation');
  }, 1000);



});


export {sonagiStart};