

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
    var target = document.getElementById("tsumamiimg");
    var event2 = event || window.event;
    WriteOutput(event2.pageY);

    var yplace = event2.pageY;
    if (yplace > 550) {
        target.style.top = 300;
    }
    else if (yplace < 250) {
        target.style.top = 0;
    }
    else {
        target.style.top = yplace - 250;
    }
}

function handleMouseMove(event) {
    event2 = event || window.event; // IE‘Î‰ž
    WriteOutput(event2.clientY);
}

function WriteOutput(str) {
    var target = document.getElementById("output");
    target.innerHTML = str;
}