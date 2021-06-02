// alert("scrypt me");
var quizQuestions = document.getElementById("quiz-questions");
var timer = document.getElementById("timer");
var btnStart = document.getElementById("btn-start");
var timecounter = document.getElementById("timecounter");
var titleitem = document.getElementById("title-item");
var nextQuestions 
var questionanswers = document.getElementById("question-answers");
var myScore = document.getElementById("score");
var btnScore = document.getElementById("btnScore");
var currentindex = 0;
var score = 0;
var count = 75;
var alert =document.getElementById("alert");
var info = document.getElementById("info");
 var addscore = document.getElementById("addscore");
 var submitresult = document.getElementById("submitresult");
var allScores = [];
var finalScore=0;
//var ans=document.createElement("DIV");

// console.log("first ans is : "+ ans);
 localStorage.setItem("userData", JSON.stringify([{"init":"Ayush","userScore":10,"bold":"","para":""}]));

var storedScores = JSON.parse(localStorage.getItem("userData"));

// console.log("item in local storage : "+ localStorage.getItem("userData"));
var questions = [
    {
        title: "Describe your current mood.",
        choices: ["Pretty happy","I am worried about something","Antisocial", "Terrible, I am fed up."],    
    },
    {
        title: "How do people describe You?",
        choices: ["Happy","Socially Awkard","Cold", "unhappy"],   
    },
    {
        title: "Do you think you have a mental health issue?",
        choices: ["I don’t think so.","I’m worried that I’m too anxious.","I think I'm too antisocial.", "Well I feel very sad a lot of time."],   
    },
    {
        title: "What’s your role in your family?",
        choices: ["The fun sociable one","The sensible one","I don’t have a role I’m outsider","The quite one"],    
    },
    {
        title: "Choose a quote",
        choices: ["Always look on the bright side of life","Worrying is as productive as chewing gum","Life’s bitch, then you die",
         "Hard time reveal true friends"],   
    },
    {
        title: "Do you like to socialize",
        choices: ["Yes, I love hanging out","Yes, if it’s with people I know","No, I like being alone", "If I can avoid it I will"],    
    },
    {
        title: "Are you in control of your emotions?",
        choices: ["Yes, pretty much all the time","Not really, no","I don’t really have emotions", "Yes, I’d say so"],    
    },
    {
        title: "How do you spend your free time?",
        choices: ["Seeing friends and family","Thinking about things","I love to watch horror movies", "Listening to music"],    
    },
    {
        title: "Choose one wish?",
        choices: ["To always be this happy","To be able to stop worrying","To be on my own more", "To at least feel content"],    
    },
    {
        title: "Do you love life?",
        choices: ["Yes, I really do","I do, but I wish it was easier","No, not really", "I try, but it’s a struggle for me"],   
    },
]
btnStart.addEventListener("click", starQuiz);
function starQuiz(){
    if(storedScores !==null) {
        allScores = storedScores;
    }
    console.log("storedScores : "+ storedScores);
    console.log("allScores : "+allScores);
    info.classList.add("d-none")
    btnStart.classList.add("d-none")
    timecounter.classList.add("d-none")
    quizQuestions.classList.remove("d-none")
    nextQuestions= questions[currentindex]
    console.log(nextQuestions.title)
    displayQuestion(nextQuestions)

    gametime()
}
btnScore.addEventListener("click" , function(){
    let name = document.getElementById("inputScore").value
    scorePage(name, count)
});
// Time set

function gametime(){

    var timeinterval = setInterval(function(){
        timer.innerText = count
         count--;
        }, 1000);

}

function scorePage(a, b) {
    var para="";
    var bold="";
  //  console.log("ans is : "+ ans);
    if(finalScore>=10 && finalScore<=16){
        /*
        console.log("first  if statement");
        var first=document.createElement("strong");
        var text=document.createTextNode("This just got added");
        first.appendChild(text);
      //  consloe.log(strong);
     //   console.log("strong is : "+ first);
        ans.appendChild(first);
       // console.log("present ans is : "+ ans);
       */
        bold="YAY!! Your mental health is good.";
    }else if(finalScore>=17 && finalScore<=24){
        /*
         var strong=document.createElement("strong");
         strong.textContent="A Bit Anxious…";
         var p=document.createElement("p");
         p.textContent="You should not worry about everything and try keeping positive mentality.";
         ans.appendChild(strong);
         ans.appendChild(p);
         */
        bold="A Bit Anxious…";
        para="You should not worry about everything and try keeping positive mentality.";
    }else if(finalScore>=25 && finalScore<=32){
        /*
        var strong=document.createElement("strong");
         strong.innerText="Kind of Antisocial! ";
         var p=document.createElement("p");
         p.innerText="You need to improve your lifestyle in order to achieve a good mental health For example: - Interact with more people, be more empathetic, do yoga and meditation daily.";
         ans.appendChild(strong);
         ans.appendChild(p);
         */
        bold="Kind of Antisocial! ";
        para="You need to improve your lifestyle in order to achieve a good mental health For example: - Interact with more people, be more empathetic, do yoga and meditation daily.";
    }else{
        /*
        var strong=document.createElement("strong");
         strong.innerText="Your mental health needs your attention!!";
         var p=document.createElement("p");
         p.innerText="Seems a depressive situation and can lead to irritable mood, sleep problem, change in interest, and bad effect on physical health To improve this situation you can follow these tips"
         var ul=document.createElement("ul");
         var li=document.createElement("li");
         li.innerText="Do regular physical exercise.";
         ul.appendChild(li);
         li.innerText="Help other people."
         ul.appendChild(li);
         li.innerText="Involve in pleasant activities.";
         ul.appendChild(li);
         li.innerText="Eat right food."
         ul.appendChild(li);
         ans.appendChild(strong);
         ans.appendChild(p);
         ans.appendChild(ul);
         */
        bold="Your mental health needs your attention!!";
    }
    var userData = {
        inits: a,
        userScore: b,
        bold:bold,
        para:para,
    }; 
    allScores.push(userData);
   // console.log("ans is : "+ userData.ans);

    localStorage.setItem("userData", JSON.stringify(allScores));
  // localStorage.setItem("userData", JSON.stringify(ans));
    location.href = "./score.ejs";
}

function displayQuestion(question){
    titleitem.innerText=question.title
    var i=1;
    question.choices.forEach(element => {
     var button =document.createElement("button")
    button.className="btn-primary btn-block text-left"
    button.innerText=element;
    button.name=i;
    // questionanswers.innerHTML=""
    questionanswers.appendChild(button)
    i+=1;
    button.addEventListener("click", displaynextQuestion)
    });
}


function displaynextQuestion(e){
   // console.log("answer"+e.target.innerText);
   // console.log("id is : "+ e.target.name);
     finalScore+=parseInt(e.target.name);
    currentindex++
    if(currentindex < questions.length){
        // correction(e.target.innerText == nextQuestions.answer)
        questionanswers.innerHTML=""
        if(currentindex < questions.length){    
            nextQuestions= questions[currentindex]
            displayQuestion(nextQuestions)  
        }else {
            currentindex = 0
            displayQuestion(nextQuestions)  
        }

    }else{
        console.log("endgame")
        endgame()
        

    }
    
     
}
function correction(response){
    
    if(response){
        alert.innerText= "Good"
        console.log("Good")
    }else {
        alert.innerText="Wrong"
        count = count -15
        timer.innerHTML = count
        console.log("Wrong")

    }
    setTimeout(function(){
        alert.innerText=""
    
        }, 1000);

}
 function endgame (){
     console.log(finalScore);
    // btnStart.classList.add("d-none")
    myScore.innaText = count
    addscore.classList.remove("d-none")
    timecounter.classList.add("d-none")
    quizQuestions.classList.add("d-none")
    addscore.classList.remove("d-none")
 }
