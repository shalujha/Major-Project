const express=require('express');
const app=express();
const bodyParser=require('body-parser');
 app.use(bodyParser.urlencoded({ extended: true }));


app.get("/bmicalculator",function(request,response){
response.sendFile(__dirname+"\\bmicalculator.html");
//response.send("<h1>BMI Calculator</h1>");
});
app.get("/", function(request,response){
  response.sendFile(__dirname+"\\index.html");
});
app.post("/bmicalculator",function(request,response){
  //console.log(request.body);
  var weight=parseFloat(request.body.weight);
  var height=parseFloat(request.body.height);
  var bmi=weight/(height*height);
  response.send("Your BMI is : "+ bmi);
});
app.post("/",function(request,response){
  //response.send("Thanks for posting");
  //console.log(request.body);
  var n1=parseInt(request.body.fnumber);
  var n2=parseInt(request.body.lnumber);
  var sum=n1+n2;
  response.send("the result is "+sum);
});
app.listen(3000,function(){
  console.log("server starts listening at port 3000");
//  console.log(__dirname+"\\index.html");
});
