const selectedAnswers = {}; 

document.getElementById("afslutKnap").addEventListener("click", function(){
    localStorage.setItem("QuizCompleted", "true");
    location.href='../mainPage/index.html'
})

document.querySelectorAll('.answer').forEach(button => {
    button.addEventListener('click', function () {
        const questionId = this.dataset.question;
        const answer = this.dataset.answer;
        
        selectedAnswers[questionId] = [answer];
        document.querySelectorAll(`[data-question="${questionId}"]`).forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
    });
});

/*document.getElementById('submit').addEventListener('click', function () {
    const unanswered = [...document.querySelectorAll('.question')].some(q => !selectedAnswers[q.dataset.question]);
    if (unanswered) {
        alert("Please answer all questions.");
    } else {
        alert("Quiz completed! Your answers: " + JSON.stringify(selectedAnswers));
    }
});*/