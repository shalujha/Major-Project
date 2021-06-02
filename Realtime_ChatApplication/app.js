const express=require('express');
const app=express();
const ejs=require('ejs');
const http=require('http').createServer(app);
const io=require('socket.io')(http);

app.set('view engine','ejs');
app.use(express.static('public'));
app.use("*/css",express.static(__dirname+"/public/css"));
app.use("*/js",express.static(__dirname+"/public/js"));
const users={};
const PORT=process.env.PORT || 3000;
io.on("connection",function(socket){
    socket.on("new_user_joined",function(name){
        console.log(name+" Joined !! ");
        users[socket.id]=name;
        socket.broadcast.emit("user_joined",name);
    });
    socket.on("send",function(message){
        socket.broadcast.emit("received",{name:users[socket.id],user_message:message})
    });
});

http.listen(PORT,function(){
    console.log('server is listening at port '+PORT);
});

app.get("/",function(req,res){
    res.render("index");
});

