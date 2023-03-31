import { gameData } from './gameData.js';

let count = 0; // 콤보 카운트 변수
const $typing = document.getElementById('typing');

// 정답 입력 이벤트 발생
$typing.addEventListener('keydown', e => {    
    
    if (e.key === 'Enter'){
        const answer = $typing.value;
        // console.log($typing.value); // 유저 입력 값

        answerChecks(answer);
        // if($layerArray !== null){
        //     console.log($layerArray[0]);
        // }
    }    
});



// 입력 할때 화면에 있는 태그들을 받아와 정답을 검증
const answerChecks = (answer) => {

    // 우선 입력 값이랑 게임 창에 있는 div를 비교해서 지워봅시다
    // const quizBox = [...document.querySelector('game-display').children];
    // const $gameDisplay = document.querySelector('.game-display');
    // const onQuizBox = [...$gameDisplay.children];
    const onQuizBox = [...document.querySelectorAll('.shadow')];
    // console.log(answer);
    // console.log(onQuizBox[0]);

    // 엔터 누를때 현재 존재하는 layer들을 배열로 받아와서 forEach 탐색    
    const quizContent = [];
    onQuizBox.forEach( (list) => {  
         quizContent.push(list.getAttribute('data-words'));
    });
    
    const $comboCount = document.getElementById('combo-score');
    const $comboBar=document.getElementById('combo-name');

    // 내려오는 컨텐츠와 입력 값 비교
    if(quizContent.includes(answer)){
        // console.log(`인덱스 : ${quizContent.indexOf(answer)}`);
        const $explosive = document.createElement('div');
        $explosive.classList.add('explosion');
        // console.log($explosive);
        onQuizBox[quizContent.indexOf(answer)].appendChild($explosive);
        // console.log(quizContent);

        setTimeout(() => {
            onQuizBox[quizContent.indexOf(answer)].remove();
        },300);
 
        $typing.value = '';       
        
        const $scoreCount = document.querySelector('#score');
        
        // gameData.combo++;
        $comboCount.textContent = ++gameData.combo;
        console.log(`콤보 : ${gameData.combo}`);
        // console.log(answer);
        

        gameData.correctArray.push(answer);
        
        // 콤보 animation 효과
        const $comboNum=document.getElementById('combo-score');
        $comboBar.innerText='COMBO';

        $comboNum.innerText=gameData.combo;
       
        $comboNum.style.display='block';
        $comboBar.style.display='block';
        
        $comboNum.classList.add('combo-effect')
    
        setTimeout(function() {
            // console.log('콤보삭제');
            $comboNum.classList.remove('combo-effect');
          }, 1000);

        gameData.score =  gameData.score + (gameData.combo * 10 ) + 90;
        $scoreCount.textContent = gameData.score;


        // console.log(answer);
        
        gameData.correctList.push(' ' +answer);
        

    } else{

        if(gameData.highCombo<gameData.combo){ 
            gameData.highCombo = gameData.combo;
        }
        $comboCount.textContent = 0;
        gameData.combo = 0;
        $typing.value = '';

    }

};

export {answerChecks};