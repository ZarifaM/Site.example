var textArray = ["Azərbaycanın bənzərsiz gözəlliyi..."];
var textPosition=0;
var speed= 200;
function typeWriter(){
    document.getElementById("animText").innerHTML
    = textArray[0].substring(0,
        textPosition ) + "<span>\u007C</span>";

    if(textPosition++ != textArray[0].length)
    setTimeout(typeWriter,speed);
}
window.addEventListener("load",typeWriter);

//var speed = 300;
function openForm(){
  document.getElementById("openable-form").style.display = "inline-block";
  setTimeout(openForm(),speed);
}
window.addEventListener("scroll",openForm); 
var responseText = document.createElement("p");
responseText.setAttribute("id", "response")
responseText.innerHTML = "Müraciətiniz uğurla qeydə alındı ✔";

document.getElementById("info-sender").onclick = function (){
     document.getElementById("openable-form").appendChild(responseText);
     document.getElementById("response").style.color = "green";
     document.getElementById("response").style.fontFamily = "Helvetica";
     document.getElementById("response").style.fontSize = "90%";

     return false;
}

