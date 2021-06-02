const express=require("express"); //Requires the Express module just as you require other modules and and puts it in a variable.
const app=express(); //Calls the express function "express()" and puts new Express application inside the app variable (to start a new Express application). It's something like you are creating an object of a class. Where "express()" is just like class and app is it's newly created object.
const https=require("https");
var bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){

  res.sendFile(__dirname+"//index.html")
})

app.post("/", function(req,res){
//  console.log("lol");
console.log(req.body.CityName);
var cityName=req.body.CityName;
var appId="2e91f358854832a7ccb83e91115571b8";
var units="metric";
var url="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+appId+"&units="+units;
console.log(url)
//var url="https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=2e91f358854832a7ccb83e91115571b8&units=metric";
https.get(url,function(response){
  console.log(response.statusCode);
  response.on("data",function(data){
  const weatherData=JSON.parse(data);
  const temp=weatherData.main.temp;
  const description=weatherData.weather[0].description;
  const icon=weatherData.weather[0].icon;
  console.log(temp);
  console.log(description);
  console.log(icon);
  var img_url="https://openweathermap.org/img/wn/"+icon+"@4x.png";
  console.log(img_url);
  res.write("<p>The weather is currently " + description+"</p>")
  res.write("<h1>The Temperature of "+cityName+" is "+temp+" degree celsius.</h1>")
  res.write("<img src="+img_url+">");
  res.send();
//  res.send("<h1>The Temperature of london is "+temp+" degree celsius.<br> The weather is currently " + description+"</h1>")
 })
})
})
app.listen(3000,function(){
  console.log("server has started listening on port 3000");
})
