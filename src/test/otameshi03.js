

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
    WriteOutput(workmsec.toString());
}   


function CatchTsumami(event) {
    var event2 = event || window.event;
    var yplace = event2.pageY;
    MoveTsumami(yplace, event2.target);
}

function CatchTsumamiS(event) {
    var event2 = event.targetTouches[0];
    var yplace = event2.pageY;
    MoveTsumami(yplace, event2.target);
}

function MoveTsumami(yplace, targ) {
    WriteOutput(yplace);
    var ypos;
    if (yplace > 600) {
        ypos = 300;
    }
    else if (yplace < 300) {
        ypos = 0;
    }
    else {
        ypos = yplace - 300;
    }
    targ.style.top = ypos + "px";
    ChangeBrightness(ypos, 0);
}


document.addEventListener('DOMContentLoaded', function () {
    var tsumami = document.getElementById("tsumamiimg");
    var close1 = document.getElementById("close1");
    var close2 = document.getElementById("close2");

    tsumami.ondrag = CatchTsumami;
    tsumami.ondragend = CatchTsumami;
    tsumami.ontouchmove = CatchTsumamiS;
    tsumami.ontouchend = CatchTsumamiS;
    close1.onclick = CloseButton;
    close2.onclick = CloseButton;

}, false);


function handleMouseMove(event) {
    event2 = event || window.event; // IE‘Î‰ž
    WriteOutput(event2.clientY);
}

function WriteOutput(str) {
    var target = document.getElementById("output");
    target.innerHTML = str;
}

function ChangeBrightness(ypos, changeindex) {
    var target = document.getElementsByClassName("deslig")[changeindex];
    var colornum = 255 - ypos / 2;
    target.style.backgroundColor = "rgb(" + colornum + ", " + colornum + ", " + colornum + ")";
}