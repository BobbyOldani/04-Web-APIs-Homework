
let countEl = document.querySelector("#count");
let quizEl = document.querySelector("#quiz");
let h3El = document.querySelector("h3");







function quizFun(){
    let rulesEl = document.createElement("p");
    let startEl = document.createElement("button");

    h3El.textContent = "Coding Quiz Challenge!"
    rulesEl.textContent = "Try to answer the following questions within the time limit. Keep in mind that an incorrect answer will give you a 15 second penalty. The more time you have left at the end of your quiz, the higher the score!"
    startEl.textContent = "Start Quiz!"

    quizEl.appendChild(rulesEl);
    quizEl.appendChild(startEl);



    startEl.addEventListener("click", function() {
        let timeLeft = 75;

        let timeInterval = setInterval(function(){
            countEl.textContent = timeLeft;
            timeLeft--;
        }, 1000)


    })
}

quizFun();