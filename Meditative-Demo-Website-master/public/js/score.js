var storedScores = JSON.parse(localStorage.getItem("userData"));
var highScoresArea = document.querySelector("#highScoresList");
var backBtn = document.querySelector("#backButton");
var clearBtn = document.querySelector("#clearScores");
function displayScores() {
    if (storedScores !== null) {
        /*
        var scoreList = document.createElement("ol");
        scoreList.className = "scoreListClass";
        for (var i = 0; i < storedScores.length; i++) {
            var initials = storedScores[i].inits;
            var scores = storedScores[i].userScore
            var scoreEntry = document.createElement("li");
            scoreEntry.innerHTML = initials + " - " + scores;
            scoreList.appendChild(scoreEntry);
        }
        highScoresArea.appendChild(scoreList);
        */    
    //   console.log("if statement me hain hm");
      // console.log(storedScores[storedScores.length-1]);
     //  console.log("ans"+storedScores[storedScores.length-1].ans);    
       var bold=document.createElement("strong");
       var para=document.createElement("p");
       var t1=document.createTextNode(storedScores[storedScores.length-1].bold);
       bold.appendChild(t1);
       var t2=document.createTextNode(storedScores[storedScores.length-1].para);
       para.appendChild(t2);
        highScoresArea.appendChild(bold);
        highScoresArea.appendChild(para);
    }else{
        console.log("else mein hain");
    }
};

displayScores();

backBtn.addEventListener("click", function () {
    location.href = "index.html";
});

clearBtn.addEventListener("click", function () {
    highScoresArea.innerHTML = "";
    window.localStorage.clear();

});
