

var starttime;
var endtime;
var workmsec;
var mousey;

function StartButton(){
	starttime = Date.now();
}


function CloseButton() {
    endtime = Date.now();
    workmsec = endtime - starttime;
    var writeplace = document.getElementsByClassName("hidden");
    writeplace[0].innerHTML += workmsec.toString();
}   


function CatchTsumami(event) {
    var event2 = event || window.event;

    var yplace = event2.pageY;
    WriteOutput(yplace);

    if (yplace > 550) {
        event2.target.style.top = 300 + "px";
    }
    else if (yplace < 250) {
        event2.target.style.top = 0 + "px";
    }
    else {
        event2.target.style.top = (yplace - 250) + "px";
    }
}

function CatchTsumamiS(event) {
    var event2 = event.targetTouches[0];
    var yplace = event.targetTouches[0].pageY;
    WriteOutput(yplace);

    if (yplace > 550) {
        event.target.style.top = 300 + "px";
    }
    else if (yplace < 250) {
        event.target.style.top = 0 + "px";
    }
    else {
        event.target.style.top = (yplace - 250) + "px";
    }
}


document.addEventListener('DOMContentLoaded', function () {
    var tsumami = document.getElementById("tsumamiimg");
    tsumami.ondrag = CatchTsumami;
    tsumami.ondragend = CatchTsumami;
    tsumami.ontouchmove = CatchTsumamiS;
    tsumami.ontouchend = CatchTsumamiS;


}, false);


function handleMouseMove(event) {
    event2 = event || window.event; // IE‘Î‰ž
    WriteOutput(event2.clientY);
}

function WriteOutput(str) {
    var target = document.getElementById("output");
    target.innerHTML = str;
}