var close = document.getElementById("close");
var pop = document.getElementById("popupcontainer");
var blacklayer = document.getElementById("blacklayer");
var controllerz = document.getElementById("controllers");
var names = document.getElementById("gamemakers");
var credits = document.getElementById("credits");
var playerType = "Male";
var chosenLevel = 1;
levelMenu = document.getElementById("element_6");

soundGameStart.play();

credits.addEventListener("click", shownames);

function shownames() {
    blacklayer.style.display = "block";
    close.style.display = "block";
    names.style.display = "block";


}

controllerz.addEventListener("click", showpopup);

function showpopup() {
    pop.style.display = "block";
    blacklayer.style.display = "block";
    close.style.display = "block";
    names.style.display = "none";


}

close.addEventListener("click", hidepopup);

function hidepopup() {
    pop.style.display = "none";
    blacklayer.style.display = "none";
    close.style.display = "none";

};

function clickFunction() {
    chosenLevel = levelMenu.value;

    localStorage.setItem("playerType", playerType);
    localStorage.setItem("chosenLevel", chosenLevel);
    soundButtonClicked.play();
    setTimeout(navigate, 1000);

    function navigate() { window.location.href = 'ZombieHunter/index.html' + '#' + playerType + '#' + chosenLevel; }
}

function hoverFunction() {
    soundButtonHover.play();

}

function playerOneChosen() {


    playerType = "Male"

    document.getElementById("im2").style.opacity = "0.6";
    document.getElementById("im1").style.opacity = "1";


}

function playerTwoChosen() {


    playerType = "Female"
    document.getElementById("im1").style.opacity = "0.6";
    document.getElementById("im2").style.opacity = "1";
}