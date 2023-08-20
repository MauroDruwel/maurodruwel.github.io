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
console.log(isMobile);
var element = document.getElementById('bar');
if (isMobile) {
    element.insertAdjacentHTML("afterend", '<div class="w3-bar w3-padding w3-top w3-card w3-mobile w3-white"><a href="#home" class="w3-bar-item w3-btn"><b>Mauro</b></a> <div class="w3-right"><button class="w3-button w3-large" onclick="openRightMenu()">☰</button></div> </div> <div class="w3-sidebar w3-bar-block w3-card w3-animate" style="display:none;right:0;" id="rightMenu"> <a onclick="fhome()" class="w3-bar-item w3-mobile w3-btn">Home</a> <a onclick="fEvents()" class="w3-bar-item w3-mobile w3-btn">Events</a> <a onclick="fMaker()" class="w3-bar-item w3-mobile w3-btn">Maker</a> <a onclick="fFuture()" class="w3-bar-item w3-mobile w3-btn">Future</a> <div class="social-icons-container"> <div class="social-icons"> <a onclick="mail()" class="icon"><img src="./assets/icons/Mail.svg" alt="Mail"></a> <a href="https://twitter.com/CoderMauro2008" class="icon"><img src="./assets/icons/X.svg" alt="X"></a> <a href="https://www.instagram.com/codermauro/" class="icon"><img src="./assets/icons/Instagram.svg" alt="Instagram"></a> <a href="https://www.linkedin.com/in/codermauro/" class="icon"><img src="./assets/icons/LinkedIn.svg" alt="LinkedIn"></a> </div> </div> <a class="w3-bar-item w3-mobile w3-btn"></a> <div class="social-icons-container"> <div class="social-icons"> <a href="https://www.youtube.com/@codermauro" class="icon"><img src="./assets/icons/Youtube.svg" alt="YouTube"></a> <a href="https://discordapp.com/users/768845999594536960" class="icon"><img src="./assets/icons/Discord.svg" alt="Discord"></a> <a href="https://github.com/MauroDruwel" class="icon"><img src="./assets/icons/Github.svg" alt="Github"></a> </div> </div> </div>');
} else {
    element.insertAdjacentHTML("afterend", '<div class="w3-bar w3-padding w3-top w3-card w3-mobile w3-white"><a href="#home" class="w3-bar-item w3-btn"><b>Mauro</b></a> <div class="w3-right w3-hide-small"> <a href="#Events" class="w3-bar-item w3-mobile w3-btn">Events</a> <a href="#Maker" class="w3-bar-item w3-mobile w3-btn">Maker</a> <a href="#Future" class="w3-bar-item w3-mobile w3-btn">Future</a> <div class="social-icons"> <a onclick="mail()" class="w3-mobile icon"><img src="./assets/icons/Mail.svg" alt="Mail"></a> <a href="https://twitter.com/CoderMauro2008" class="w3-mobile icon"><img src="./assets/icons/X.svg" alt="X"></a> <a href="https://www.instagram.com/codermauro/" class="w3-mobile icon"><img src="./assets/icons/Instagram.svg" alt="Instagram"></a> <a href="https://www.linkedin.com/in/codermauro/" class="w3-mobile icon"><img src="./assets/icons/LinkedIn.svg" alt="LinkedIn"></a> <a href="https://www.youtube.com/@codermauro" class="w3-mobile icon"><img src="./assets/icons/Youtube.svg" alt="YouTube"></a> <a href="https://discordapp.com/users/768845999594536960" class="w3-mobile icon"><img src="./assets/icons/Discord.svg" alt="Discord"></a> <a href="https://github.com/MauroDruwel" class="w3-mobile icon"><img src="./assets/icons/Github.svg" alt="Github"></a> </div> </div> </div>');
}