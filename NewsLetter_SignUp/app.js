const express=require('express');
const app=express();
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

// app.use(express.static("public"));
app.use('*/css',express.static('public/css'));
//app.use('*/js',express.static('public/js'));
app.use('*/images',express.static('public/images'));

app.get("/", function(req, res){
  console.log(__dirname+"\\signup.html");
  res.sendFile(__dirname+"\\signup.html");
});

app.post("/",function(req,res){
  console.log(req.body.Fname);
  console.log(req.body.Lname);
  console.log(req.body.Email);
  res.send("thanks for coming");
});

app.listen(3000,function(){
  console.log("server is listening at port 3000");
});

// api key
//  4a220f7e632474c8cc1dfd5776e3f661-us1
// list // ID
// 4b581d3ff0
