import Content from './controllers/QuizContent/Content.js';
import checkQuizResult from './controllers/QuizResult/checkQuizResult.js';
import Start from './controllers/QuizStarter/Start.js';
import fetchCountriesData from './controllers/DataContent/fetchData.js';

const quizContent=document.querySelector("#quiz-content");
const startPage=document.querySelector("#start-page");
const startButton=document.querySelector("#start-page>button");
const checkResult=document.querySelector("#check-result");
const checkBtn=document.querySelector(".get-res-btn");
const getResult=document.querySelector(".get-result");
const goToStartBtn=document.querySelector(".go-to-start")
let Countries=[];

startButton.addEventListener("click",()=>Start(startPage,quizContent,checkResult))

async function displayQuizContent() {
    try {
        Countries=await fetchCountriesData()
        Content(quizContent,Countries)
    } catch (error) {
        console.error(error);
    }
}


checkBtn.addEventListener('click', (e)=>{
    checkQuizResult(quizContent,Countries,getResult)
    e.target.disabled=true;
    goToStartBtn.classList.remove("go-to-start")
    goToStartBtn.classList.add("go-to-start-show")

})

goToStartBtn.addEventListener("click",()=>window.location.reload())
document.addEventListener('DOMContentLoaded',displayQuizContent)