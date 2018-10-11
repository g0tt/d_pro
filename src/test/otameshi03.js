

var starttime;
var endtime;
var workmsec;

function StartButton(){
	starttime = Date.now();
}


function CloseButton() {
    endtime = Date.now();
    workmsec = endtime - starttime;
    var writeplace = document.getElementsByClassName("hidden");
    writeplace[0].innerHTML += workmsec.toString();
}   