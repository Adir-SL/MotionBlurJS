function whenDone(){
    var x = document.getElementsByClassName("blurjs");
    var i;
    for (i = 0; i < x.length; i++) {
        if(window.runScriptA !== 1){
            var y = x[i].parentNode.children;
            var r;
            for (r = 0; r < y.length; r++) {
                window.tempTemp = y[r];
                window.tempParent = y[r].parentNode;
                if(y[r].className["baseVal"].indexOf("blurjs") >= 0){
                    var a = window.tempTemp.cloneNode(true);
                    window.tempParent.insertBefore(a, window.tempTemp);
                    a.style.animationDelay = "60ms";
                    var a = window.tempTemp.cloneNode(true);
                    window.tempParent.insertBefore(a, window.tempTemp);
                    a.style.animationDelay = "40ms";
                    var a = window.tempTemp.cloneNode(true);
                    window.tempParent.insertBefore(a, window.tempTemp);
                    a.style.animationDelay = "20ms";
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
                window.tempTemp = y[r];
                window.tempParent = y[r].parentNode;
                if(y[r].className["baseVal"].indexOf("fadejs") >= 0){
                    var a = window.tempTemp.cloneNode(true);
                    window.tempParent.insertBefore(a, window.tempTemp);
                    a.style.animationDelay = "60ms";
                    a.style.opacity = "0.25";
                    var a = window.tempTemp.cloneNode(true);
                    window.tempParent.insertBefore(a, window.tempTemp);
                    a.style.animationDelay = "40ms";
                    a.style.opacity = "0.5";
                    var a = window.tempTemp.cloneNode(true);
                    window.tempParent.insertBefore(a, window.tempTemp);
                    a.style.animationDelay = "20ms";
                    a.style.opacity = "0.75";
                    r += 3;
                }
            }
            window.runScriptB = 1;
        }
    }
}
document.addEventListener("DOMContentLoaded", whenDone);