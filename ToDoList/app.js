const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const date=require(__dirname+"/date.js");
console.log(date);

app.set('view engine','ejs');
app.use('*/css',express.static('public/css'));
app.use(bodyParser.urlencoded({extended:true}));
app.listen(3000,function(){
  console.log('server is listening at 3000');
});

var items=["Buy Food","cook food","Eat Food"];
var workItems=[];
app.get("/",function(req,res){

  var number_mapped_to_days={1:'Monday',2:'Tuesday',3:'Wednesday',4:'Thursday',5:'Friday',6:'Saturday',7:'Sunday'};
  /*
  if(currentDay===0 || currentDay===6){
  //  res.render('list',{kindOfDay:number_mapped_to_days[currentDay]});

  }else{
    res.render('list',{kindOfDay:number_mapped_to_days[currentDay]});
  } */
  let today=date.getDay();
  res.render('list',{listTitle:today,newItems:items});
//  console.log(items);
//  res.render('list',{newItems:items});
  //console.log("get request received");
  //res.send("hello world");
});

app.get("/work",function(req,res){
  res.render('list',{listTitle:"Work List",newItems:workItems});
});

app.post("/work",function(req,res){
//  workItems.push(req.body.todo);
  res.redirect("/work");
});
app.get("/about",function(req,res){
  console.log("aye");
  res.render('about');
});
app.post("/",function(req,res){
  console.log(req.body.type);
  let item=req.body.todo;
  if(req.body.type.localeCompare("Work List")==0){
    console.log("first condition");
    workItems.push(item);
    res.redirect("/work");
  }else{
    console.log("second condition");
    items.push(item);
    res.redirect("/");
  }
});
