let squares= document.querySelectorAll('.square');
let mole=document.querySelector('.mole');
let timeleft=document.querySelector('#time-left');
let score=document.querySelector('#score');

let result=0;
let hitposition=null;
let timer=30;
let timerid=null;
let timecall=null;

function randomsquare(){
    squares.forEach(ele=>{
        ele.classList.remove('mole');
    })
let randomposition=squares[Math.floor(Math.random()*9)];
randomposition.classList.add('mole');
hitposition=randomposition.id;
}

function movemole(){
   timecall= setInterval(randomsquare,500);
}

squares.forEach(ele=>{
    ele.addEventListener('mousedown',()=>{
        if ( ele.id == hitposition )
        {
            result++;
            score.innerHTML=`Score:${result}`;
            hitposition=null;
        }
    })
})

movemole();

function countdown(){
    timer--;
    timeleft.innerHTML=`Time left :${timer} seconds`;
    
    if (timer == 0){
        clearInterval(timerid);
        clearInterval(timecall);
        alert("Game Over !!! : Final Score is "+result);
    }
}

timerid=setInterval(countdown,1000);

