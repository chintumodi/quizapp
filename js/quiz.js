const quizDB = [
    {
       question:"1.what is js full form",
        a:"javascript",
        b:"javanav",
        c:"node js",
        d:"java",
        ans:"ans1"
    },
    {
        question:"2.what is full form css  ",
        a:"Hyper language",
        b:"CassCadingSheet",
        c:"CascadingStyleSheets",
        d:"None",
        ans:"ans3"
    },
    {
        question:"3. who is fronted design liberary",
        a:"react native",
        b:"bootstrap",
        c:"js",
        d:"html",
        ans:"ans2"
    },
]



const question = document.querySelector('.question');
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')
const submit = document.querySelector('.submit') 
const answers = document.querySelectorAll('.answer')
 
const showScore = document.querySelector('#showScore')


let questionCount = 0;
let score = 0;
const loadQuestion = () =>{
// console.log(quizDB[0].question)
 const questionList = quizDB[questionCount]
question.innerText = questionList.question

 option1.textContent = questionList.a; 
 option2.textContent = questionList.b;
 option3.textContent = questionList.c;
 option4.textContent = questionList.d;

}

loadQuestion()

const getCheckAnswer = ()=>{
    let answer;
answers.forEach((curElem)=>{
    if(curElem.checked){
        answer = curElem.id
    }

});
return answer;
}

deselectAll = () =>{
    answers.forEach((curElem)=>{
        curElem.checked = false;
    })
}
submit.addEventListener('click',()=>{
     const checkedAnswer = getCheckAnswer()
     console.log(checkedAnswer)

     if(checkedAnswer === quizDB[questionCount].ans){
        score++
     };

     questionCount++;
     deselectAll()
     if(questionCount < quizDB.length){
        loadQuestion()
     }
     else{
showScore.innerHTML = `
<h3>You Scored ${score}/${quizDB.length}</h3>
<button class="btn1" onclick="location.reload()">Play Again</button>
`;
showScore.classList.remove('scoreArea')
     }



});

