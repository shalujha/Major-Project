var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

var button = document.querySelectorAll(".btn");
for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function(event) {
    var id = this.id;
    if (gamePattern.length == 0) {
      id = "wrong";
    } else {
      if (gamePattern[userClickedPattern.length] != id) {
        id = "wrong";
      }
    }
    switch (id) {
      case "red":
        animatePress(id);
        makeSound(id);
        userClickedPattern.push(id);
        console.log("gamePattern : " + gamePattern);
        console.log("userClickedPattern : " + userClickedPattern);
        if (gamePattern.length > 0 && (userClickedPattern.length == gamePattern.length)) {
          //  alert("aye hm");
          setTimeout(function() {
            nextSequence();
          }, 1000);
        }
        break;
      case "green":
        animatePress(id);
        makeSound(id);
        userClickedPattern.push(id);
        console.log("gamePattern : " + gamePattern);
        console.log("userClickedPattern : " + userClickedPattern);
        if (gamePattern.length > 0 && (userClickedPattern.length == gamePattern.length)) {
          //  alert("aye hm");
          setTimeout(function() {
            nextSequence();
          }, 1000);
        }
        break;
      case "blue":
        animatePress(id);
        makeSound(id);
        userClickedPattern.push(id);
        console.log("gamePattern : " + gamePattern);
        console.log("userClickedPattern : " + userClickedPattern);
        if (gamePattern.length > 0 && (userClickedPattern.length == gamePattern.length)) {
          //  alert("aye hm");
          setTimeout(function() {
            nextSequence();
          }, 1000);
        }
        break;
      case "yellow":
        animatePress(id);
        makeSound(id);
        userClickedPattern.push(id);
        console.log("gamePattern : " + gamePattern);
        console.log("userClickedPattern : " + userClickedPattern);
        if (gamePattern.length > 0 && (userClickedPattern.length == gamePattern.length)) {
          setTimeout(function() {
            nextSequence();
          }, 1000);
        }
        //  alert("aye hm");
        break;
      default:
        // Game Over
        $("body").addClass("game-over");
        setTimeout(function() {
          $("body").removeClass("game-over");
        }, 100);
        makeSound(id);
        userClickedPattern = [];
        gamePattern = [];
        level = 0;
        $("h1").text("Game Over, Press any Key to restart Game");
    }
  })
}

function animatePress(current_color) {
  $("#" + current_color).addClass("pressed");
  setTimeout(function() {
    $("#" + current_color).removeClass("pressed"), 100
  });
}

function nextSequence() {
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColours[randomNumber];
  gamePattern.push(randomChosenColor);
  //  alert("randomNumber : "+randomNumber);
  //  alert("randomChosenColor : "+randomChosenColor);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
  makeSound(randomChosenColor);
  level += 1;
  $("h1").text("Level " + level);
  //  console.log("game Pattern : "+ gamePattern);
  //  console.log("userClickedPattern : "+userClickedPattern);
  /*
  var audio = new Audio(".\\sounds\\"+randomChosenColor+".mp3");
  audio.play(); */
}

function makeSound(key) {
  switch (key) {
    case "red":
      var audio = new Audio('.\\sounds\\red.mp3');
      audio.play();
      break;
    case "green":
      var audio = new Audio('.\\sounds\\green.mp3');
      audio.play();
      break;
    case "blue":
      var audio = new Audio('.\\sounds\\blue.mp3');
      audio.play();
      break;
    case "yellow":
      var audio = new Audio('.\\sounds\\yellow.mp3');
      audio.play();
      break;
    case "wrong":
      var audio = new Audio('.\\sounds\\wrong.mp3');
      audio.play();
      break;
  }
}
//nextSequence();

$("body").keypress(function() {
  nextSequence();
})
