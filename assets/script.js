let body = document.querySelector("body");
let countEl = document.querySelector("#count");
let quizEl = document.querySelector("#quiz");
let h3El = document.querySelector("h3");
let buttons = document.querySelector("#buttons");
let i = 0;
let timeLeft = 75

//console.log(questions.title)

// if(timeLeft <= 0) {                                                 //I cant figure out how to get this to work. Most likely because I set this up like a mad man...
//     quizEl.removeChild(questionEl);
//     quizEl.removeChild(buttons);
//     highScore(); //call highScore() that adds input box and such...
//     clearInterval(timeInterval);
// }

    let rulesEl = document.createElement("p");
    let startEl = document.createElement("button");

    h3El.textContent = "Coding Quiz Challenge!"
    rulesEl.textContent = "Try to answer the following questions within the time limit. Keep in mind that an incorrect answer will give you a 15 second penalty. The more time you have left at the end of your quiz, the higher the score!"
    startEl.textContent = "Start Quiz!"

    quizEl.appendChild(rulesEl);
    quizEl.appendChild(startEl);



    startEl.addEventListener("click", function() {

        h3El.textContent = "";
        rulesEl.remove();
        startEl.remove();

        let timeInterval = setInterval(function(){
            countEl.textContent = timeLeft;
            timeLeft--;
               console.log(timeLeft);

        }, 1000)
        

        startQuiz();
           
        function startQuiz() {
        
        //console.log(i);
        

        let questionEl = document.createElement("h3");
        let buttons = document.createElement("div")
        let button1 = document.createElement("button");
        let button2 = document.createElement("button");
        let button3 = document.createElement("button");
        let button4 = document.createElement("button");
        let answerDiv = document.createElement("div")
        let answerCheck = document.createElement("h5")
        
        answerCheck.style.textAlign = "center";
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
                

                highScore(); //call highScore() that adds input box and such...
                clearInterval(timeInterval);
            }
            
        })

        if(timeLeft <= 0) {
            quizEl.removeChild(questionsEl);
            quizEl.removeChild(buttons);
            clearInterval(timeInterval);
            highScore();

        }

        button1.addEventListener("click", function(){
            if (button1.textContent !== questions[i].answer) {
                timeLeft -= 15;
                body.append(answerDiv);
                answerDiv.append(answerCheck);
                answerCheck.textContent = "Wrong!";
                setTimeout(function() {
                    answerCheck.textContent = "";
                }, 750);

            } else {
                body.append(answerDiv);
                answerDiv.append(answerCheck);
                answerCheck.textContent = "Correct!";
                setTimeout(function() {
                    answerCheck.textContent = "";
                }, 750);
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
                }, 750);

            } else {
                body.append(answerDiv);
                answerDiv.append(answerCheck);
                answerCheck.textContent = "Correct!";
                setTimeout(function() {
                    answerCheck.textContent = "";
                }, 750);
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
                }, 750);

            } else {
                body.append(answerDiv);
                answerDiv.append(answerCheck);
                answerCheck.textContent = "Correct!";
                setTimeout(function() {
                    answerCheck.textContent = "";
                }, 750);
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
                }, 750);

            } else {
                body.append(answerDiv);
                answerDiv.append(answerCheck);
                answerCheck.textContent = "Correct!";
                setTimeout(function() {
                    answerCheck.textContent = "";
                }, 750);
            }
        })

        function highScore() {

            let finalScore = document.createElement("h6");
            let scoreInput = document.createElement("input");
            let submitDiv = document.createElement("a");
            let submitButton = document.createElement("button");

            quizEl.appendChild(finalScore);
            quizEl.appendChild(scoreInput);
            quizEl.appendChild(submitDiv);
            submitDiv.appendChild(submitButton);
            countEl.style.display = "none";
            
            scoreInput.setAttribute("id", "score-input");
            submitDiv.setAttribute("id", "submit-div");
            
            
            h3El.textContent = "Quiz Complete!!!";
            finalScore.textContent = "Your final score is: " + (timeLeft + 1);
            scoreInput.placeholder = "Enter Initials here";
            submitButton.textContent = "Submit";

            submitButton.addEventListener("click", function(e){
                e.preventDefault();
                //higherScore();
                let input = document.querySelector("#score-input").value;
                console.log(input);
                //localStorage.setItem("Username", input)                 // 
                //localStorage.setItem("Score", timeLeft.valueOf() +1);   //
                localStorage.setItem(input, timeLeft.valueOf() + 1);
                document.location.href = "highscores.html";
                
                

                //NOTE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                //I can currently write my stuff to local storage. The issue I have going forward has to do with me having a seperate html document for the highscores.
                //What I realize I should have done was create everything dynamically over the DOM. That way my script isnt having errors once im on a new page.
                //Also my organization of this was horrible. I finally feel like I am starting to grasp JS a bit better after writing this script. I understand how my
                //organization of functions within functions makes no sense. I realize how I could write this better and if I had enough time I beleive I could get it working
                //100%. I intend to keep working at this and completeing it the correct way however I am stuck with this at the time being givin the due date. I put a lot of hours
                //into this and I think that it has helped me feel like I am starting to see light at the end of the tunnel despite my progress at this time.


            
                // function higherScore() {
                // quizEl.removeChild(h3El);
                // quizEl.removeChild(finalScore);
                // quizEl.removeChild(scoreInput);
                // quizEl.removeChild(submitDiv);

                // let scoreList = document.createElement("ol");
                // scoreList.setAttribute("id", "score-list");
                // quizEl.appendChild(scoreList);

                    

                
                
                
                
    
                // window.addEventListener("DOMContentLoaded", function(){
                //     let list = document.getElementById("score-list");
                //     for (let i = 0; i < localStorage.length; i++) {
                //         if (localStorage.key(i).indexOf(input) !== -1) {
                //             let item = document.createElement("li");
                //             let itemtext = document.createTextNode(localStorage.getItem(localStorage.key(i)));
                //             item.appendChild(itemtext);
                //             list.appendChild(item);
                //         }
                //     }


                //  })

                //}

                // let scoreLink = document.querySelector("#scorelink");
                // scoreLink.addEventListener("click", higherScore);

            })


        }


        
        }

        
    })


