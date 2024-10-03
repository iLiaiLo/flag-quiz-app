function Start(startPage,quizContent,checkResult){
    startPage.style.display="none";
    quizContent.classList.remove('quiz-content');
    checkResult.classList.remove('check-result');
    quizContent.classList.add('quiz-content-show');
    checkResult.classList.add('check-result-show');
}

export default Start