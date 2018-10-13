﻿
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
    var target = document.getElementsByClassName("hidden")[0];
    var target2 = document.getElementById("chebut");
    ClearMission(target, workmsec);
    target2.checked = false;
    target.style.opacity = "1";
    target.style.visibility = "visible";
}   

function CloseButton4() {
    endtime = Date.now();
    workmsec = endtime - starttime;
    var target = document.getElementsByClassName("hidden")[1];
    var target2 = document.getElementById("chebut2");
    ClearMission(target, workmsec);
    target2.checked = false;
    target.style.opacity = "1";
    target.style.visibility = "visible";
}   

function ClearMission(target, cleartime) {
    var clearhtml1 = '<div class="deslig"><div class=\"box10\" style=\"';
    var clearcss = 'width: 150px; padding: 0.5em 1em; margin: 2em 0; color: #00BCD4; background: #e4fcff; border-top: solid 6px #1dc1d6; box-shadow: 0 3px 4px rgba(0, 0, 0, 0.32);'
    var clearhtml2 = '\"><p style=\"margin: 0;padding: 0;\">' + cleartime / 1000 + "秒でクリア" + "</p></div></div>";
    target.innerHTML = clearhtml1 + clearcss + clearhtml2;
}

var catchypos;
var tsumamiiniypos;

/* PCでつまみを動かしているとき */
function CatchTsumami(event, changeind) {
    var event2 = event || window.event;
    var yplace = event2.pageY;
    MoveTsumami(yplace, event2.target, changeind);
}

/* PCでつまみを掴んだ直後 */
function CatchTsumamiSta(event) {
    catchypos = (event || window.event).pageY;
    tsumamiiniypos = Math.max(parseInt((event || window.event).target.style.top) || 0, 0);
}


/* スマホでつまみを動かしているとき */
function CatchTsumamiS(event, changeind, id) {
    var event2 = event.targetTouches[0];
    var yplace = event2.pageY;
    MoveTsumamiS(yplace, document.getElementById(id), changeind);
}

/* スマホでつまみを掴んだ直後 */
function CatchTsumamiSS(event, id) {
    catchypos = event.targetTouches[0].pageY;
    tsumamiiniypos = parseInt(document.getElementById(id).style.top);
    document.getElementsByTagName("body")[0].style.overflow = "hidden"; /* つまみをつかんでいる間はページがスクロールしないようにする */
}

function CatchTsumamiSE() {
    document.getElementsByTagName("body")[0].style.overflow = "scroll";
}

function MoveTsumami(yplace, targ, changeind) {
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
    ChangeBrightness(ypos, changeind);
}

function MoveTsumamiS(yplace, targ, changeind) {
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
    ChangeBrightness(ypos, changeind);
}

function DeleteHamb() {
    document.getElementById("hamburger1").style.display = "none";
}


function ChangeBrightness(ypos, changeindex) {
    var target = document.getElementsByClassName("deslig")[changeindex];
    var colornum = 255 - ypos / 2;
    target.style.backgroundColor = "rgb(" + colornum + ", " + colornum + ", " + colornum + ")";
}

/*ここからスタイルシートの初期操作*/

function ApplyStyle(id, stylestr) {
    var target = document.getElementById(id);
    target.style = stylestr;
}

function ApplyShadowToImage(id, zind) {
    var target = document.getElementById(id).getElementsByTagName("img");
    var imgnum = target.length;
    for (var i = 0; i < imgnum; i++) {
        target[i].style = "position: relative; z-index: " + zind + ";";
    }
}

function ApplyShadowAndStyle(id, stylestr, zind) {
    var target = document.getElementById(id);
    target.style = stylestr;
    ApplyShadowToImage(id, zind);
}

function ApplyClickEvent(id, func) {
    var target = document.getElementById(id);
    target.onclick = func;
}

function SetTsumamiStyle(id, imgsize, sizesm) {
    var targetsm = document.getElementById(id);
    var targetpc = targetsm.getElementsByTagName("img")[0]; 

    /* つまみの画像の大きさとPCでのつまみの当たり判定の調節 */
    targetpc.style.width = imgsize;
    targetpc.style.height = imgsize;

    /* スマホでのつまみの当たり判定の調節 */
    targetsm.style.top = (sizesm / 2 + 27.5) + "px";
    targetsm.style.width = sizesm + "px";
    targetsm.style.height = sizesm + "px";
    targetsm.style.left = "calc(50% - " + (sizesm - 1) / 2 + "px)";
}

/*ここまでスタイルシートの初期操作*/

function SetNormalSlider(id, changeind) {
    var targetsm = document.getElementById(id);
    var targetpc = targetsm.getElementsByTagName("img")[0];
    targetpc.ondragstart = CatchTsumamiSta;
    targetpc.ondrag = function (event) { CatchTsumami(event, changeind); };
    targetpc.ondragend = function (event) { CatchTsumami(event, changeind); };
    targetsm.ontouchstart = function (event) { CatchTsumamiSS(event, id); };
    targetsm.ontouchmove = function (event) { CatchTsumamiS(event, changeind, id); };
    targetsm.ontouchend = CatchTsumamiSE;
}

document.addEventListener('DOMContentLoaded', function () {

    /* 各種スタイルシート適用 */
    var shadowsty = "box-shadow: 0px 0px 0px 1px rgb(0, 0, 0) inset;";
    var close1sty = "position: absolute; height: 75px; top: 50px; left: 50%;" + shadowsty;
    var close2sty = "position: absolute; height: 25px; top: 125px; left: 50%;" + shadowsty;
    var close4sty = "position: absolute; height: 100px; top: 50px; left: 50%;" + shadowsty;

    var hamburgersty = "position: absolute; height: 100px ;top: 50px; left: calc(50% - 100px);" + shadowsty;
    var slidersty = "position: absolute; height: 400px ;top: 150px; left: calc(50% - 100px);" + shadowsty;
    var tsumamisty = "position: absolute;filter: drop-shadow(0px 0px 1px rgb(0, 0, 0));";

    ApplyShadowAndStyle("close1", close1sty, -1);
    ApplyShadowAndStyle("close2", close2sty, -1);
    ApplyShadowAndStyle("hamburger1", hamburgersty, -1);
    ApplyShadowAndStyle("slider", slidersty, -1);
    ApplyShadowAndStyle("tsumami", tsumamisty, 0);

    ApplyShadowAndStyle("close4", close4sty, -1);
    ApplyShadowAndStyle("hamburger1_2", hamburgersty, -1);
    ApplyShadowAndStyle("slider_2", slidersty, -1);
    ApplyShadowAndStyle("tsumami_2", tsumamisty, 0);

    ApplyShadowAndStyle("close4_2", close4sty, -1);
    ApplyShadowAndStyle("hamburger1_3", hamburgersty, -1);
    ApplyShadowAndStyle("slider_3", slidersty, -1);
    ApplyShadowAndStyle("tsumami_3", tsumamisty, 0);
    
    ApplyClickEvent("close1", CloseButton);
    ApplyClickEvent("close2", CloseButton);
    ApplyClickEvent("close4", CloseButton4);



    SetNormalSlider("tsumami", 0);
    SetNormalSlider("tsumami_2", 1);
    SetNormalSlider("tsumami_3", 2);


    /* つまみサイズと初期位置、当たり判定の調節*/
    buttonimgsize = 50;
    buttonsizesm = 75;
    SetTsumamiStyle("tsumami", buttonimgsize, buttonsizesm);
    SetTsumamiStyle("tsumami_2", buttonimgsize, buttonsizesm);
    SetTsumamiStyle("tsumami_3", buttonimgsize, buttonsizesm);

}, false);


function WriteOutput(str) {
    var target = document.getElementById("output");
    target.innerHTML = str;
}
