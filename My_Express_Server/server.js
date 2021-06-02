const express=require('express');
const app=express();

app.get("/" ,function(request,response){
  response.send("Hello");
// console.log(request);
});

app.get("/contact",function(req,res){
  res.send("<h1>contact me at shalinijha219999@gmail.com</h1>");
});

app.get("/about",function(req,res){
  res.send("<h2>I am Shalini Jha, A budding software Developer</h2>");
});
app.get("/lol",function(req,res){
  res.send("<h2>lol</h2>");
});

app.get("/hobbies",function(req,res){
  res.send("<ul><li>Tea</li><li>chhole bhathure</li><li>Chicken Roganjosh</li></ul>");
});
app.listen(3000,function(){
  console.log("server starts listening to port 3000");
});
