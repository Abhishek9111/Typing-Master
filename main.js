window.addEventListener('load',init)


const currentlevel=5;
//global
let time=currentlevel;
let score = 0;
let isPlain;

//Dom
const currentWord = document.querySelector("#current-word");
const message = document.querySelector("#message");
const wordInput = document.querySelector("#word-input");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");


//array
const a = ['newsstand','condon','borecole','unblossoming','zoan','gossipry','bookseller','rewon','modernise','nadir','reharden']

function init()
{
    showwords(a);
    startMatch();
    wordInput.addEventListener('input',startMatch)
    setInterval(countDown,1000)
    setInterval(checkstatus,50)
}

function showwords()
{
    const randomNum= Math.floor(Math.random()*a.length)
    currentWord.innerHTML = a[randomNum]
}
function startMatch()
{
    if(matchCheck())
    {
        time =currentlevel +1;
        showwords(a);
        wordInput.value='';
        score++;
    }
    scoreDisplay.innerHTML=score;
}
function matchCheck()
{
    if(wordInput.value == currentWord.innerHTML)
    {
        message.innerHTML="Correct!!";
        return true;
    }
    else
    {
        message.innerHTML="InCorrect!!!";
        return false;
    }
}

function countDown()
{
    if(time>0)
    {
        time--;
    }
    else if(time ==0)
    {
        isPlain=false;
    }
    timeDisplay.innerHTML=time;
}

function checkstatus()
{
    if(!isPlain && time==0)
    message.innerHTML="Gameover"
}