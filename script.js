var p1,p2,p3,p4,p5,p6;
var container1;
var searchingBox,searchingBox2;
searchingBox=document.getElementById("TextBox").value;
searchingBox2=document.getElementById("TextBox2").value;
document.getElementById("dialog").addEventListener("mouseover",CursorOnDialog);
document.getElementById("dialog").addEventListener("mouseout",CursorOut);
function CursorOnDialog(){
document.getElementById("dialog").style.transform="scale(0.5,0.5) rotate(-30deg)";
p5=document.createElement("p");
p6=document.createTextNode("Chat model without server implemented");
p5.appendChild(p6);
document.body.appendChild(p5);
p5.style.fontWeight="bold";
p5.style.left="170px";
p5.style.top="60px";
p5.style.position="absolute";
p5.style.zIndex="2";
}
function CursorOut(){
p5.remove();
document.getElementById("dialog").style.transform="scale(1,1) rotate(-30deg)";
}
function SendingMessage(){
container1=document.getElementById("chatcontainer");
searchingBox=document.getElementById("TextBox").value;
searchingBox2=document.getElementById("TextBox2").value;
p1=document.createElement("p");
p2=document.createTextNode(searchingBox);
p3=document.createElement("p");
p4=document.createTextNode(searchingBox2);
p1.appendChild(p2);
p3.appendChild(p4);
p3.append(": ",searchingBox);
p3.style.fontWeight="bold";
p3.style.marginLeft="50px";
container1.appendChild(p3);
}