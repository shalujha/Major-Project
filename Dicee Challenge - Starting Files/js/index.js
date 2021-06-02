var random_num_1=Math.floor(Math.random()*6)+1;
var random_num_2=Math.floor(Math.random()*6)+1;

var random_address_1=".\\images\\dice"+random_num_1+".png";
var random_address_2=".\\images\\dice"+random_num_2+".png";

document.querySelector("img.img1").setAttribute("src",random_address_1);
document.querySelector("img.img2").setAttribute("src",random_address_2);

var val1=Number(random_address_1.slice(random_address_1.length-5,random_address_1.length-4));
var val2=Number(random_address_2.slice(random_address_2.length-5,random_address_2.length-4));

if(val1>val2){
    document.getElementById("heading").innerText="Player 1 wins";
}else if(val1<val2){
    document.getElementById("heading").innerText="Player 2 wins";
}else{
    document.getElementById("heading").innerText="Draw";
}
