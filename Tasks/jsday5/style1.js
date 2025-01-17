var list=document.getElementById("nav");
list.style.listStyleType="circle";
list.style.display="inline-block";
list.style.textAlign="left";

var pic=document.getElementById("header");
pic.style.textAlign="right";

var div=document.createElement("div");
document.body.appendChild(div);
var img=document.createElement("img");
img.src="dom.jpg";
div.appendChild(img);