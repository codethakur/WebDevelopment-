var quizdata = [
    {
        question: 'which framework is related JS',
        a:'.net',
        b:'flask',
        c:'react',
        d:'django',
        correct:'react'
    },
    {
        question: 'Which is not a programming language',
        a:'HTML',
        b:'Python',
        c:'Java',
        d:'Js',
        correct:'a'
    },
    {
        question: 'whic is not a frsmework',
        a:'react',
        b:'Javascript',
        c:'angular',
        d:'django',
        correct:'b'
    },
    {
        question: 'CSS stand for ',
        a:'cascading style state',
        b:'cascading style sheet',
        c:'cascading  sheet of style',
        d:'none',
        correct:'b'
    },
]
var quiz = document.getElementById('quiz')
var answer = document.querySelectorAll('.answer')
var question = document.getElementById('question')
var option_a = document.getElementById('a_value')
var option_b = document.getElementById('b_value')
var option_c = document.getElementById('c_value')
var option_d = document.getElementById('d_value')

var submitbtn  = document.getElementById('submit')

var currentQuestion = 0
var quizscore = 0

loadQuiz()

function loadQuiz()
{
    deselected()
    question.innerText = quizdata[currentQuestion].question
    option_a.innerText = quizdata[currentQuestion].a
    option_b.innerText = quizdata[currentQuestion].b
    option_c.innerText = quizdata[currentQuestion].c
    option_d.innerText = quizdata[currentQuestion].d
}
function deselected()
{
    answer.forEach(answer =>answer.checked=false)
}
// submitbtn.addEventListener('click', function sub(){
//     // console.log("hjfdhfnrhnf");
//     // deselected()
//     currentQuestion++;
//     loadQuiz()
//     // console.log(answer[0].checked)
// })
submitbtn.addEventListener('click', ()=>{
    var selectedoption;
    answer.forEach(answer=>{
        if(answer.checked)
        {
            selectedoption=answer.id
        }
    })
    if(selectedoption==quizdata[currentQuestion].correct)
    {
        quizscore=quizscore+1
    }
    currentQuestion=currentQuestion+1
    if(currentQuestion==quizdata.length)
    {
        // h=document.createElement('h1');
        // h.innerHTML=quizscore.toString()+" out of "+quizdata.length
        // document.getElementById('quizdiv').innerHTML='';
        document.getElementById('quizdiv').innerHTML=quizscore.toString()+" Out Of "+quizdata.length
        // document.getElementById('quizdiv').innerHTML=`<h1> your score $quizscore out of s </h1>`
        // document.getElementById('quizdiv').innerHTML= quizscore+"<h1>your score</h1>"+quizdata.length
        // document.getElementById('quizdiv').appendChild(h)
       // console.log('your score is',$(quizscore))
    }else{
        loadQuiz()
    }
})
