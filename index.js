var player1=prompt("Write name of Player 1");
var player2=prompt("Write name of Player 2");
function play(){
var r1=Math.floor(Math.random()*6)+1;
var image1="images/dice"+r1+".png";
document.querySelectorAll("img")[0].setAttribute("src",image1);
var r2=Math.floor(Math.random()*6)+1;
var image2="images/dice"+r2+".png";
document.querySelectorAll("img")[1].setAttribute("src",image2);
if(r1>r2)
document.querySelector("h1").innerHTML=player1+" wins💪💪";
else if(r1<r2)
document.querySelector("h1").innerHTML=player2+" wins💪💪";
else
document.querySelector("h1").innerHTML="DRAW🤝🤝";
document.querySelector("button").innerHTML="Continue";

}
