document.addEventListener("DOMContentLoaded", function(){
    if(localStorage.getItem("QuizCompleted")){
        document.getElementById("studieretning").scrollIntoView({ behavior: 'smooth' });
        localStorage.removeItem("QuizCompleted")
    }
})