
var shownmission;
var answertime;


var starttime;
var endtime;
var workmsec;
var mousey;

var buttonimgsize;
var buttonsizesm;

function StartButton(){
	starttime = Date.now();
}

function CloseButton() {
    endtime = Date.now();
    workmsec = endtime - starttime;
    var writeplace = document.getElementsByClassName("hidden");
    WriteOutput(workmsec.toString());
    ClearMission(document.getElementsByClassName("deslig")[0], workmsec);
}   

function ClearMission(target, cleartime) {
    var clearhtml1 = '<div class=\"box10\" style=\"';
    var clearcss = 'width: 150px; padding: 0.5em 1em; margin: 2em 0; color: #00BCD4; background: #e4fcff; border-top: solid 6px #1dc1d6; box-shadow: 0 3px 4px rgba(0, 0, 0, 0.32);'
    var clearhtml2 = '\"><p style=\"margin: 0;padding: 0;\">' + cleartime / 1000 + "秒でクリア" + "</p></div >";
    target.innerHTML = clearhtml1 + clearcss + clearhtml2;
}

var catchypos;
var tsumamiiniypos;

/* PCでつまみを動かしているとき */
function CatchTsumami(event) {
    var event2 = event || window.event;
    var yplace = event2.pageY;
    WriteOutput(yplace);
    MoveTsumami(yplace, event2.target);
}

/* PCでつまみを掴んだ直後 */
function CatchTsumamiSta(event) {
    catchypos = (event || window.event).pageY;
    tsumamiiniypos = Math.max(parseInt(document.getElementById("tsumamiimg").style.top) || 0, 0);
    WriteOutput(tsumamiiniypos);
}


/* スマホでつまみを動かしているとき */
function CatchTsumamiS(event) {
    var event2 = event.targetTouches[0];
    var yplace = event2.pageY;
    MoveTsumamiS(yplace, document.getElementById("tsumami"));
}

/* スマホでつまみを掴んだ直後 */
function CatchTsumamiSS(event) {
    catchypos = event.targetTouches[0].pageY;
    tsumamiiniypos = parseInt(document.getElementById("tsumami").style.top);
    WriteOutput(tsumamiiniypos);
}

function MoveTsumami(yplace, targ) {
    yplace += (tsumamiiniypos - catchypos);
    var ypos;
    if (yplace > 275) {
        ypos = 275;
    }
    else if (yplace < -25) {
        ypos = -25;
    }
    else {
        ypos = yplace;
    }
    targ.style.top = ypos + "px";
    ChangeBrightness(ypos, 0);
}

function MoveTsumamiS(yplace, targ) {
    yplace += (tsumamiiniypos - catchypos);
    var ypos;
    if (yplace > 337.5) {
        ypos = 337.5;
    }
    else if (yplace < 37.5) {
        ypos = 37.5;
    }
    else {
        ypos = yplace;
    }
    targ.style.top = ypos + "px";
    ChangeBrightness(ypos, 0);
}

function DeleteHamb() {
    document.getElementById("hamburger1").style.display = "none";
}

document.addEventListener('DOMContentLoaded', function () {
    var tsumami = document.getElementById("tsumamiimg");
    var tsumamit = document.getElementById("tsumami");
    var close1 = document.getElementById("close1");
    var close2 = document.getElementById("close2");

    tsumami.ondragstart = CatchTsumamiSta;
    tsumami.ondrag = CatchTsumami;
    tsumami.ondragend = CatchTsumami;
    tsumamit.ontouchstart = CatchTsumamiSS;
    tsumamit.ontouchmove = CatchTsumamiS;
    close1.onclick = CloseButton;
    close2.onclick = CloseButton;

    /* つまみの画像の大きさとPCでのつまみの当たり判定の調節 */
    buttonimgsize = 50;
    tsumami.style.width = buttonimgsize;
    tsumami.style.height = buttonimgsize;

    /* スマホでのつまみの当たり判定の調節 */
    buttonsizesm = 75;
    tsumamit.style.top = (buttonsizesm / 2 + 27.5) + "px";
    tsumamit.style.width = buttonsizesm + "px";
    tsumamit.style.height = buttonsizesm + "px";
    tsumamit.style.left = "calc(50% - " + (buttonsizesm - 1) / 2 + "px)";
    ChangeBrightness((buttonsizesm / 2 + 27.5), 0);
}, false);


function handleMouseMove(event) {
    event2 = event || window.event; // IE対応
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