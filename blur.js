function opacityFactor (opacity, f) {
    return ((+opacity * f)).toString();
}

function getTrueOpacity(el) {
    let opacity = '1';
    let specialOpacity = '1';
    let _originalOpacity_ = el.outerHTML.match(/((?<=fadejs-data="opacity:)|(?<=fadejs-data="opacity: ))(([0-9]\d*(\.\d+)?;)|([0-9]\d*(\.\d+)?"))/gm);
    if (_originalOpacity_ && _originalOpacity_.length > 0) {
        opacity = _originalOpacity_[0].slice(0, _originalOpacity_[0].length - 1).replace(/opacity:/, '');
        specialOpacity = getSpecialOpacityFactor(opacity).toFixed(4).toString();
        opacity = (+opacity / 1.80555555).toFixed(8).toString(); //1.857142
    } return [opacity, specialOpacity];
}

function getSpecialOpacityFactor(x) {
    x = Math.abs(+x);
    if (x < 1) {

        if (x < .01) {
            return 0;
        } else if (x >= .01 && x <= .05) {
            return .01;
        } else if (x > .05 && x <= .2) {
            return (13.3333 * Math.pow(x, 3) - 6 * Math.pow(x, 2) + 1.06667 * x - 0.03);
        } else if (x > .2 && x < .3) {
            if (x <= .28) {
                return (465029.7619 * Math.pow(x, 5) - 554650.2976 * Math.pow(x, 4) + 263229.1667 * Math.pow(x, 3) - 62118.6756 * Math.pow(x, 2) + 7287.7232 * x - 339.917);
            } else { return .09; }
        } else if (x >= .3 && x < .4) {
            if (x >= .32) {
                return (9375 * Math.pow(x, 4) - 13229.2 * Math.pow(x, 3) + 6987.5 * Math.pow(x, 2) - 1636.58 * x + 143.466);
            } else { return .09; }
        } else if (x >= .4 && x < .55) {
            return (-24.2424 * Math.pow(x, 3) + 35.8182 * Math.pow(x, 2) - 16.7485 * x + 2.67);
        } else if (x >= .55 && x < .6) {
            return (1.2 * x - 0.4);
        } else if (x >= .6 && x < .65) {
            return 0.6 * x - 0.039999999999999;
        } else if (x >= .65 && x < .85) {
            return (-13.3333 * Math.pow(x, 3) + 30 * Math.pow(x, 2) - 20.8667 * x + 4.9);
        } else if (x >= .85) {
            return (-26.1905 * Math.pow(x, 3) + 72.7143 * Math.pow(x, 2) - 64.8774 * x + 19.3439);
        }

    } else { return x > 0 ? 1 : 0; }
}

function whenDone(){
    var x = document.getElementsByClassName("blurjs");
    var i;
    for (i = 0; i < x.length; i++) {
        if(window.runScriptA !== 1){
            var y = x[i].parentNode.children;
            var r;
            for (r = 0; r < y.length; r++) {
                if(y[r].className.search("blurjs") >= 0){
                    var justTemp_1 = y[r].outerHTML.replace(/class=/, "style='animation-delay:0ms;' class=");
                    var justTemp_2 = y[r].outerHTML.replace(/class=/, "style='animation-delay:20ms;' class=");
                    var justTemp_3 = y[r].outerHTML.replace(/class=/, "style='animation-delay:40ms;' class=");
                    var justTemp_4 = y[r].outerHTML.replace(/class=/, "style='animation-delay:60ms;' class=");
                    y[r].outerHTML = justTemp_4+justTemp_3+justTemp_2+justTemp_1;
                    r += 3;
                }
            }
            window.runScriptA = 1;
        }    
    }

    var x = document.getElementsByClassName("fadejs");
    var i;
    for (i = 0; i < x.length; i++) {
        if(window.runScriptB !== 1){
            var y = x[i].parentNode.children;
            var r;
            for (r = 0; r < y.length; r++) {
                if(y[r].className.search("fadejs") >= 0){
                    let opacityValues = getTrueOpacity(y[r]);
                    let opacity = opacityValues[0];
                    let specialOpacity = opacityValues[1];
                    var justTemp_1 = y[r].outerHTML.replace(/class=/, "style='animation-delay:0ms;opacity:" + specialOpacity + ";' class=");
                    var justTemp_2 = y[r].outerHTML.replace(/class=/, "style='animation-delay:20ms;opacity:" + opacityFactor(opacity, .75) + ";' class=");
                    var justTemp_3 = y[r].outerHTML.replace(/class=/, "style='animation-delay:40ms;opacity:" + opacityFactor(opacity, .5) + ";' class=");
                    var justTemp_4 = y[r].outerHTML.replace(/class=/, "style='animation-delay:60ms;opacity:" + opacityFactor(opacity, .25) + ";' class=");
                    y[r].outerHTML = justTemp_4+justTemp_3+justTemp_2+justTemp_1;
                    r += 3;
                }
            }
            window.runScriptB = 1;
        }
    }
}

document.addEventListener("DOMContentLoaded", whenDone);

function blurMe(e){
    var c = e.target.parentNode;
    c.getElementsByTagName("img")[0].outerHTML="";
    var justTemp_1 = c.outerHTML.replace(/class=/, "style='animation-delay:0ms;' class=");
    var justTemp_2 = c.outerHTML.replace(/class=/, "style='animation-delay:20ms;' class=");
    var justTemp_3 = c.outerHTML.replace(/class=/, "style='animation-delay:40ms;' class=");
    var justTemp_4 = c.outerHTML.replace(/class=/, "style='animation-delay:60ms;' class=");
    c.outerHTML = justTemp_4+justTemp_3+justTemp_2+justTemp_1;
}
function fadeMe(e){
    var c = e.target.parentNode;
    c.getElementsByTagName("img")[0].outerHTML="";
    var justTemp_1 = c.outerHTML.replace(/class=/, "style='animation-delay:0ms;opacity:1;' class=");
    var justTemp_2 = c.outerHTML.replace(/class=/, "style='animation-delay:20ms;opacity:.75;' class=");
    var justTemp_3 = c.outerHTML.replace(/class=/, "style='animation-delay:40ms;opacity:.5;' class=");
    var justTemp_4 = c.outerHTML.replace(/class=/, "style='animation-delay:60ms;opacity:.25;' class=");
    c.outerHTML = justTemp_4+justTemp_3+justTemp_2+justTemp_1;
}