function whenDone(){
    var x = document.getElementsByClassName("blurjs");
    var i;
    for (i = 0; i < x.length; i++) {
        if(window.runScriptA !== 1){
            var y = x[i].parentNode.children;
            var r;
            for (r = 0; r < y.length; r++) {
                window.tempTempA = y[r];
                window.tempParentA = y[r].parentNode;
                if(y[r].className["baseVal"].indexOf("blurjs") >= 0){
                    y[r].style.animationPlayState = "paused";
                    var a = window.tempTempA.cloneNode(true);
                    window.tempParentA.insertBefore(a, window.tempTempA);
                    a.style.animationDelay = "60ms";
                    a.style.animationPlayState = "running";
                    var a = window.tempTempA.cloneNode(true);
                    window.tempParentA.insertBefore(a, window.tempTempA);
                    a.style.animationDelay = "40ms";
                    a.style.animationPlayState = "running";
                    var a = window.tempTempA.cloneNode(true);
                    window.tempParentA.insertBefore(a, window.tempTempA);
                    a.style.animationDelay = "20ms";
                    a.style.animationPlayState = "running";
                    window.tempTempA.style.animationPlayState = "running";
                    r += 3;
                }
            }
            window.runScriptA = 1;
        }    
    }
    var g = document.getElementsByClassName("fadejs");
    var t;
    for (t = 0; t < g.length; t++) {
        if(window.runScriptB !== 1){
            var z = g[t].parentNode.children;
            var s;
            for (s = 0; s < z.length; s++) {
                window.tempTempB = z[s];
                window.tempParentB = z[s].parentNode;
                if(z[s].className["baseVal"].indexOf("fadejs") >= 0){
                    z[s].style.animationPlayState = "paused";
                    var b = window.tempTempB.cloneNode(true);
                    window.tempParentB.insertBefore(b, window.tempTempB);
                    b.style.animationDelay = "60ms";
                    b.style.opacity = "0.25";
                    b.style.animationPlayState = "running";
                    var b = window.tempTempB.cloneNode(true);
                    window.tempParentB.insertBefore(b, window.tempTempB);
                    b.style.animationDelay = "40ms";
                    b.style.opacity = "0.5";
                    b.style.animationPlayState = "running";
                    var b = window.tempTempB.cloneNode(true);
                    window.tempParentB.insertBefore(b, window.tempTempB);
                    b.style.animationDelay = "20ms";
                    b.style.opacity = "0.75";
                    b.style.animationPlayState = "running";
                    window.tempTempB.style.animationPlayState = "running";
                    s += 3;
                }
            }
            window.runScriptB = 1;
        }
    }
}
document.addEventListener("DOMContentLoaded", whenDone);