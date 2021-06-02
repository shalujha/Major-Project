const socket=io.connect();
//socket.connect('http://127.0.0.1:3000')
const name=prompt("enter your name please !!");
socket.emit("new_user_joined",name);
//alert("hey there");