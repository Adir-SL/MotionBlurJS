function blurMe(e) {
    var c = e.target.parentNode;
    if (c.outerHTML.indexOf("blurjs-ghost") > 0) {
        var g = Number(c.getAttribute("blurjs-ghost"));
    } else {
        var g = 4;
    }

    var temps = "";
    c.getElementsByTagName("img")[0].outerHTML = "";
    var d = c.outerHTML;

    var i;
    for (i = 1; i <= g; i++) {
        var temp = d.replace(/class=/, "style='animation-delay:" + (g - i) * 20 + "ms;transition-delay:" + (g - i) * 20 + "ms; class=");
        temps = temps + temp;
    }
    c.outerHTML = temps;
}

function fadeMe(e) {
    var c = e.target.parentNode;
    if (c.outerHTML.indexOf("blurjs-ghost") > 0) {
        var g = Number(c.getAttribute("blurjs-ghost"));
    } else {
        var g = 4;
    }

    var temps = "";
    c.getElementsByTagName("img")[0].outerHTML = "";
    var d = c.outerHTML;

    var i;
    for (i = 1; i <= g; i++) {
        var temp = d.replace(/class=/, "style='animation-delay:" + (g - i) * 20 + "ms;transition-delay:" + (g - i) * 20 + "ms;opacity:" + (100 - (g - i) * (100 / g)) + "%;' class=");
        temps = temps + temp;
    }
    c.outerHTML = temps;
}


module.exports = { blurMe, fadeMe };