function openRightMenu() {
    document.getElementById("rightMenu").style.display = "block";
}

function closeRightMenu() {
    document.getElementById("rightMenu").style.display = "none";
}

function fhome() {
    var elmnt = document.getElementById("home");
    elmnt.scrollIntoView();
    document.getElementById("rightMenu").style.display = "none";
}

function fEvents() {
    var elmnt = document.getElementById("Events");
    elmnt.scrollIntoView();
    document.getElementById("rightMenu").style.display = "none";
}

function fMaker() {
    var elmnt = document.getElementById("Maker");
    elmnt.scrollIntoView();
    document.getElementById("rightMenu").style.display = "none";
}

function fcontact() {
    var elmnt = document.getElementById("contact");
    elmnt.scrollIntoView();
    document.getElementById("rightMenu").style.display = "none";
}

function fFuture() {
    var elmnt = document.getElementById("Future");
    elmnt.scrollIntoView();
    document.getElementById("rightMenu").style.display = "none";
}

function mail() {
    document.location.href = "mailto:mauro.druwel@gmail.com"
}


var isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);
var element = document.getElementById('bar');
if (isMobile) {
    element.insertAdjacentHTML("afterend", '<div class="w3-bar w3-padding w3-top w3-card w3-mobile w3-white"><a href="#home" class="w3-bar-item w3-btn"><b>Mauro</b></a><div class="w3-right"><button class="w3-button w3-large" onclick="openRightMenu()">&#9776;</button></div></div><div class="w3-sidebar w3-bar-block w3-card w3-animate" style="display:none;right:0;" id="rightMenu"><a  onclick="fhome()" class="w3-bar-item w3-button">Home</a><a onclick="fEvents()" class="w3-bar-item w3-button">Events</a><a onclick="fMaker()" class="w3-bar-item w3-button">Maker</a><a onclick="fFuture()" class="w3-bar-item w3-button">Future</a><div class="icon"><a onclick="mail()" class="fa fa-envelope-o"></a><a href="https://twitter.com/CoderMauro2008" class="fa fa-twitter"></a><a href="https://www.youtube.com/channel/UCZHh7VaOlN307PKA_eUSMrA?view_as=subscriber" class="fa fa-youtube"></a><a href="https://www.instagram.com/codermauro/" class="fa fa-instagram"></a></div></div></div>');
} else {
    element.insertAdjacentHTML("afterend", '<div class="w3-bar w3-padding w3-top w3-card w3-white w3-wide"> <a href="#home" class="w3-bar-item w3-btn"><b>Mauro</b></a><div class="w3-right w3-hide-small"><a onclick="mail()" class="w3-mobile fa fa-envelope-o"></a><a href="https://twitter.com/CoderMauro2008" class="w3-mobile fa fa-twitter"></a><a href="https://www.youtube.com/channel/UCZHh7VaOlN307PKA_eUSMrA?view_as=subscriber" class="w3-mobile fa fa-youtube"></a><a href="https://www.instagram.com/codermauro/" class="w3-mobile fa fa-instagram"></a><a href="#Events" class="w3-bar-item w3-mobile w3-btn">Events</a><a href="#Maker" class="w3-bar-item w3-mobile w3-btn">Maker</a><a href="#Future" class="w3-bar-item w3-mobile w3-btn">Future</a></div></div></div>');
}