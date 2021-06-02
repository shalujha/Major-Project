$(".btn").click(function(){
    //  console.log($("#text").text());
      $("#text").text("Breathe in !!");
    //  alert("Breathe in")
      setTimeout(function(){
        $("#text").text("Hold");
      },3000);
      setTimeout(function(){
        $("#text").text("Breathe Out!!");
      },5500);
      setTimeout(function(){
        $("#text").text("click start ");
      },8000);
    });
    