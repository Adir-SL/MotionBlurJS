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
                    var justTemp_1 = y[r].outerHTML.replace(/class=/, "style='animation-delay:0ms;opacity:1;' class=");
                    var justTemp_2 = y[r].outerHTML.replace(/class=/, "style='animation-delay:20ms;opacity:.75;' class=");
                    var justTemp_3 = y[r].outerHTML.replace(/class=/, "style='animation-delay:40ms;opacity:.5;' class=");
                    var justTemp_4 = y[r].outerHTML.replace(/class=/, "style='animation-delay:60ms;opacity:.25;' class=");
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