let body = document.querySelector("body");
let countEl = document.querySelector("#count");
let quizEl = document.querySelector("#quiz");
let h3El = document.querySelector("h3");
let buttons = document.querySelector("#buttons");
let i = 0;

console.log(questions.title)


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

        h3El.textContent = "";
        rulesEl.remove();
        startEl.remove();

        let timeInterval = setInterval(function(){
            countEl.textContent = timeLeft;
            timeLeft--;
               

        }, 1000)

        startQuiz();
           
        function startQuiz() {
        
        console.log(i);

        let questionEl = document.createElement("h3");
        let buttons = document.createElement("div")
        let button1 = document.createElement("button");
        let button2 = document.createElement("button");
        let button3 = document.createElement("button");
        let button4 = document.createElement("button");
        let answerDiv = document.createElement("div")
        let answerCheck = document.createElement("h5")

        buttons.setAttribute("id", "buttons");
        answerDiv.setAttribute("id", "answercheck")

        quizEl.appendChild(questionEl);
        quizEl.appendChild(buttons);
        buttons.appendChild(button1);
        buttons.appendChild(button2);
        buttons.appendChild(button3);
        buttons.appendChild(button4);

        questionEl.innerHTML = questions[i].title;
        button1.textContent = questions[i].choices[0];
        button2.textContent = questions[i].choices[1];
        button3.textContent = questions[i].choices[2];
        button4.textContent = questions[i].choices[3];

        buttons.addEventListener("click", function(){
            if (i <= questions.length - 2) {
                if (button1 !== questions[i].answer)
                quizEl.removeChild(questionEl);
                quizEl.removeChild(buttons);
                i++;
            startQuiz();
            } else {
                i++;
                quizEl.removeChild(questionEl);
                quizEl.removeChild(buttons);
                clearInterval(timeInterval);
            }
            
        })

        button1.addEventListener("click", function(){
            if (button1.textContent !== questions[i].answer) {
                timeLeft -= 15;
                body.append(answerDiv);
                answerDiv.append(answerCheck);
                answerCheck.textContent = "Wrong!";
                setTimeout(function() {
                    answerCheck.textContent = "";
                }, 1500);

            } else {
                body.append(answerDiv);
                answerDiv.append(answerCheck);
                answerCheck.textContent = "Correct!";
                setTimeout(function() {
                    answerCheck.textContent = "";
                }, 1500);
            }
        })

        button2.addEventListener("click", function(){
            if (button2.textContent !== questions[i].answer) {
                timeLeft -= 15;
                body.append(answerDiv);
                answerDiv.append(answerCheck);
                answerCheck.textContent = "Wrong!";
                setTimeout(function() {
                    answerCheck.textContent = "";
                }, 1500);

            } else {
                body.append(answerDiv);
                answerDiv.append(answerCheck);
                answerCheck.textContent = "Correct!";
                setTimeout(function() {
                    answerCheck.textContent = "";
                }, 1500);
            }
        })

        button3.addEventListener("click", function(){
            if (button3.textContent !== questions[i].answer) {
                timeLeft -= 15;
                body.append(answerDiv);
                answerDiv.append(answerCheck);
                answerCheck.textContent = "Wrong!";
                setTimeout(function() {
                    answerCheck.textContent = "";
                }, 1500);

            } else {
                body.append(answerDiv);
                answerDiv.append(answerCheck);
                answerCheck.textContent = "Correct!";
                setTimeout(function() {
                    answerCheck.textContent = "";
                }, 1500);
            }
        })

        button4.addEventListener("click", function(){
            if (button4.textContent !== questions[i].answer) {
                timeLeft -= 15;
                body.append(answerDiv);
                answerDiv.append(answerCheck);
                answerCheck.textContent = "Wrong!";
                setTimeout(function() {
                    answerCheck.textContent = "";
                }, 1500);

            } else {
                body.append(answerDiv);
                answerDiv.append(answerCheck);
                answerCheck.textContent = "Correct!";
                setTimeout(function() {
                    answerCheck.textContent = "";
                }, 1500);
            }
        })

        
        
        }

        
    })



}

quizFun();

