
var answertime;
var answertimes;
var shownquests;

var starttime;
var endtime;
var workmsec;
var mousey;

var buttonimgsize; /*25*/
var buttonsizesm;/*75*/
var buttonimgsize2;/*20~70*/
var buttonsizesm2;/*buttonimgsize2 + 50*/

var datajson;

function ReturnData() {
    var data = {
        shownquests: shownquests,/*示したミッション(onehot形式)*/
        answertimes: answertimes, /*各問題の回答時間*/
        answered: answered, /*3問目または4問目でチェックした場所*/
        buttonimgsize: buttonimgsize2,/*5問目で出したボタンのサイズ*/
    }
    return data;
}

    function StartButton() {
        starttime = Date.now();
    }

    function CloseButton() {
        endtime = Date.now();
        workmsec = endtime - starttime;
        answertimes[0] = workmsec;
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
        answertimes[1] = workmsec;
        var target = document.getElementsByClassName("hidden")[1];
        var target2 = document.getElementById("chebut2");
        ClearMission(target, workmsec);
        target2.checked = false;
        target.style.opacity = "1";
        target.style.visibility = "visible";
    }

    var savedhtml;

    function CloseNormal() {
        var target = document.getElementsByClassName("hidden")[2];
        savedhtml = target.innerHTML;

        var closehtml1 = '<div class="deslig"><div class=\"box10\" style=\"';
        var closecss = 'width: 300px; padding: 0.5em 1em; margin: 2em 0; color: #FF69B4; background: #fff5ee; border-top: solid 6px #ff1493; box-shadow: 0 3px 4px rgba(0, 0, 0, 0.32);'
        var closehtml2 = '\"><p style=\"margin: 0;padding: 0;\">' + "ソフトが閉じられました。<br>下のアイコンから再度開いてください。" + "</p></div>";
        var closehtml3 = "<img src=\"./images/icon.png\" width=100px height=100px onclick=\"ReturnSavedHTML()\" onmouseover=\"this.style.opacity=0.5\" onmouseout=\"this.style.opacity=1\"></div > ";
        target.innerHTML = closehtml1 + closecss + closehtml2 + closehtml3;
    }

    function ReturnSavedHTML() {
        var target = document.getElementsByClassName("hidden")[2];
        target.innerHTML = savedhtml;

        ApplyClickEvent("close4_2", CloseNormal);
        SetNormalSlider("tsumami_3", 2);
        SetTsumamiStyle("tsumami_3", buttonimgsize, buttonsizesm);
    }

    function CloseNormal2() {
        var target = document.getElementsByClassName("hidden")[3];
        savedhtml = target.innerHTML;

        var closehtml1 = '<div class="deslig"><div class=\"box10\" style=\"';
        var closecss = 'width: 300px; padding: 0.5em 1em; margin: 2em 0; color: #FF69B4; background: #fff5ee; border-top: solid 6px #ff1493; box-shadow: 0 3px 4px rgba(0, 0, 0, 0.32);'
        var closehtml2 = '\"><p style=\"margin: 0;padding: 0;\">' + "ソフトが閉じられました。<br>下のアイコンから再度開いてください。" + "</p></div>";
        var closehtml3 = "<img src=\"./images/icon.png\" width=100px height=100px onclick=\"ReturnSavedHTML2()\" onmouseover=\"this.style.opacity=0.5\" onmouseout=\"this.style.opacity=1\"></div > ";
        target.innerHTML = closehtml1 + closecss + closehtml2 + closehtml3;
    }

    function ReturnSavedHTML2() {
        var target = document.getElementsByClassName("hidden")[3];
        target.innerHTML = savedhtml;

        ApplyClickEvent("close4_3", CloseNormal2);
        SetNormalSlider("tsumami_4", 3);
        SetTsumamiStyle("tsumami_4", buttonimgsize, buttonsizesm);
    }

    function CloseNormal3() {
        var target = document.getElementsByClassName("hidden")[4];
        savedhtml = target.innerHTML;

        var closehtml1 = '<div class="deslig"><div class=\"box10\" style=\"';
        var closecss = 'width: 300px; padding: 0.5em 1em; margin: 2em 0; color: #FF69B4; background: #fff5ee; border-top: solid 6px #ff1493; box-shadow: 0 3px 4px rgba(0, 0, 0, 0.32);'
        var closehtml2 = '\"><p style=\"margin: 0;padding: 0;\">' + "ソフトが閉じられました。<br>下のアイコンから再度開いてください。" + "</p></div>";
        var closehtml3 = "<img src=\"./images/icon.png\" width=100px height=100px onclick=\"ReturnSavedHTML3()\" onmouseover=\"this.style.opacity=0.5\" onmouseout=\"this.style.opacity=1\"></div > ";
        target.innerHTML = closehtml1 + closecss + closehtml2 + closehtml3;
    }

    function ReturnSavedHTML3() {
        var target = document.getElementsByClassName("hidden")[4];
        target.innerHTML = savedhtml;

        ApplyClickEvent("close4_4", CloseNormal3);
        SetNormalSlider("tsumami_5", 4);
        SetTsumamiStyle("tsumami_5", buttonimgsize, buttonsizesm);
    }


    function ClearMission(target, cleartime) {
        var clearhtml1 = '<div class="deslig"><div class=\"box10\" style=\"';
        var clearcss = 'width: 150px; padding: 0.5em 1em; margin: 2em 0; color: #00BCD4; background: #e4fcff; border-top: solid 6px #1dc1d6; box-shadow: 0 3px 4px rgba(0, 0, 0, 0.32);'
        var clearhtml2 = '\"><p style=\"margin: 0;padding: 0;\">' + cleartime / 1000 + "秒でクリア" + "</p></div></div>";
        target.innerHTML = clearhtml1 + clearcss + clearhtml2;
        CheckAllCleared();
    }

    /*最後の問題でつまみの操作による色変更とクリア表示が非同期的に行われるため、desligのクラス名を変えないとクリア表示後に色を変えられてしまう。*/
    function ClearMission2(target, cleartime) {
        var clearhtml1 = '<div class="deslig2"><div class=\"box10\" style=\"';
        var clearcss = 'width: 150px; padding: 0.5em 1em; margin: 2em 0; color: #00BCD4; background: #e4fcff; border-top: solid 6px #1dc1d6; box-shadow: 0 3px 4px rgba(0, 0, 0, 0.32);'
        var clearhtml2 = '\"><p style=\"margin: 0;padding: 0;\">' + cleartime / 1000 + "秒でクリア" + "</p></div></div>";
        target.innerHTML = clearhtml1 + clearcss + clearhtml2;
        CheckAllCleared();
}

function ClearMission3(target, cleartime) {
    var clearhtml1 = '<div class=\"box10\" style=\"';
    var clearcss = 'width: 150px; padding: 0.5em 1em; margin: 2em 0; color: #00BCD4; background: #e4fcff; border-top: solid 6px #1dc1d6; box-shadow: 0 3px 4px rgba(0, 0, 0, 0.32);'
    var clearhtml2 = '\"><p style=\"margin: 0;padding: 0;\">' + cleartime / 1000 + "秒でクリア" + "</p></div>";
    target.innerHTML = clearhtml1 + clearcss + clearhtml2;
    CheckAllCleared();
}

function CheckAllCleared() {
    questnum = answertimes.length;
    var answerednum = 0;
    for (var i = 0; i > questnum; i++) {
        if (answertimes[i] != -1) {
            answerednum += 1;
        }
    }
    if (answerednum == 4) {
        datajson = ReturnData();
    }
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

    function ApplyCStyle(classname, index, stylestr) {
        var target = document.getElementsByClassName(classname)[index];
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
        targetpc.width = imgsize;
        targetpc.height = imgsize;

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

    function ObserveStyleChange(id) {
        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutationRecord) {
                if (parseInt(mutationRecord.target.style.top) > 250) {
                    observer.disconnect();
                    endtime = Date.now();
                    workmsec = endtime - starttime;
                    answertimes[4] = workmsec;
                    var target = document.getElementsByClassName("hidden")[4];
                    var target2 = document.getElementById("chebut4");
                    ClearMission2(target, workmsec);
                    target2.checked = false;
                    target.style.opacity = "1";
                    target.style.visibility = "visible";
                    var target3 = document.getElementsByClassName("sqbut")[4];
                    target3.style.height = "160px";
                }
            });
        });
        var target0 = document.getElementById(id);
        var target = target0.getElementsByTagName("img")[0];

        var options = { attributes: true, attributeFilter: ["style"] };

        observer.observe(target0, options);
        observer.observe(target, options);


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

        ApplyShadowAndStyle("close4_3", close4sty, -1);
        ApplyShadowAndStyle("nohamburger", hamburgersty, -1);
        ApplyShadowAndStyle("slider_4", slidersty, -1);
        ApplyShadowAndStyle("tsumami_4", tsumamisty, 0);

        ApplyShadowAndStyle("close4_4", close4sty, -1);
        ApplyShadowAndStyle("nohamburger_2", hamburgersty, -1);
        ApplyShadowAndStyle("slider_5", slidersty, -1);
        ApplyShadowAndStyle("tsumami_5", tsumamisty, 0);



        ApplyClickEvent("close1", CloseButton);
        ApplyClickEvent("close2", CloseButton);
        ApplyClickEvent("close4", CloseButton4);
        ApplyClickEvent("close4_2", CloseNormal);
        ApplyClickEvent("close4_3", CloseNormal2);
        ApplyClickEvent("close4_4", CloseNormal3);


        SetNormalSlider("tsumami", 0);
        SetNormalSlider("tsumami_2", 1);
        SetNormalSlider("tsumami_3", 2);
        SetNormalSlider("tsumami_4", 3);
        SetNormalSlider("tsumami_5", 4);


        /* つまみサイズと初期位置、当たり判定の調節*/
        buttonimgsize = 25;
        buttonsizesm = 75;
        SetTsumamiStyle("tsumami", buttonimgsize, buttonsizesm);
        SetTsumamiStyle("tsumami_2", buttonimgsize, buttonsizesm);
        SetTsumamiStyle("tsumami_3", buttonimgsize, buttonsizesm);
        SetTsumamiStyle("tsumami_4", buttonimgsize, buttonsizesm);

        buttonimgsize2 = Math.random() * 50 + 20;
        buttonsizesm2 = buttonimgsize + 50;

        SetTsumamiStyle("tsumami_5", buttonimgsize2, buttonsizesm2);

        InitializeAnswer(6);

        ObserveStyleChange("tsumami_5", "top");

        /*表示する問題を選ぶ*/

        var rand1 = Math.random();
        var targs = document.getElementsByClassName("sqbut");
        function hidequestion(targs, index1, index2) {
            targs[index1].style.opacity = 0;
            targs[index1].style.height = "0px";
            targs[index2].style.opacity = 0;
            targs[index2].style.height = "0px";
        }
        if (rand1 < 0.25) {
            hidequestion(targs, 0, 2);
            shownquests = [false, true, false, true, true];
        }
        else if (rand1 < 0.5) {
            hidequestion(targs, 0, 4);
            shownquests = [false, true, true, false, true];
        }
        else if (rand1 < 0.75) {
            hidequestion(targs, 1, 2);
            shownquests = [true, false, false, true, true];
        }
        else {
            hidequestion(targs, 1, 4);
            shownquests = [true, false, true, false, true];
        }

        var targtext = document.getElementsByTagName("textarea")[0];
        var motostr = "食べられません　";
        var atostr = motostr;
        for (var i = 0; i < 15; i++) {
            atostr += motostr;
        }
        targtext.innerHTML = atostr;

    }, false);

function CheckAnswer0() {
    var targets = document.getElementsByTagName("textarea");
    var cleared = targets[0].value == targets[1].value;
    if (cleared) {
        endtime = Date.now();
        workmsec = endtime - starttime;
        var target = document.getElementsByClassName("hidden0")[0];
        target.style.height = "100px";
        ClearMission3(target, workmsec);
        answered[5] = workmsec;
    }
    else {
        var target = document.getElementById("messagetext");
        target.innerHTML = "<div style=\"color:red\">右のテキストと左のテキストが異なっています。</div>"
    }
}

    function WriteOutput(str) {
        var target = document.getElementById("output");
        target.innerHTML = str;
    }

    var answered;
    var corrected;
    var correctindex;

    function InitializeAnswer(questnum) {
        answered = new Array(questnum);
        corrected = new Array(questnum);
        for (var i = 0; i < questnum; i++) {
            answered[i] = false;
            corrected[i] = false;
        }
        correctindex = [false, true, true, false, true, true];
        answertimes = new Array(6);
        for (var i = 0; i < 6; i++) {
            answertimes[i] = -1;
        }
    }

    function Answer(index) {
        answered[index] = !answered[index];
    }


    function CheckAnswer(questindex, placeindex) {
        var questnum = questindex.length;
        var correct = true;
        for (var i = 0; i < questnum; i++) {
            var queind = questindex[i];
            if (!answered[queind] ^ correctindex[queind]) {
                corrected[questindex[i]] = true;
            }
            else {
                corrected[questindex[i]] = false;
            }
            correct = correct && corrected[questindex[i]];
        }
        Answered(placeindex);
    }

    function Answered(index) {
        endtime = Date.now();
        workmsec = endtime - starttime;
        answertimes[index] = workmsec;
        var target = document.getElementsByClassName("hidden")[index];
        var target2 = document.getElementById("chebut" + (index + 1));
        ClearMission(target, workmsec);
        target2.checked = false;
        target.style.opacity = "1";
        target.style.visibility = "visible";
        var target3 = document.getElementsByClassName("sqbut")[index];
        target3.style.height = "160px";
    }

    function Include(val, arr) {
        var arrlen = arr.length;
        var include = false;
        for (var i = 0; i < arrlen; i++) {
            if (arr[i] == val) {
                include = true;
                break;
            }
        }
        return include;
    }
