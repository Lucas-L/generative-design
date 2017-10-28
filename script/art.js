

var part, particles, period, anim; // Déclaration varibales



////// EXEMPLES MADE BY LL ///////////

/*reptile*/
reptile = [];

for (var i = 1; i <= 6000; i++) {
    partReptile = {
        x: Math.random() * wi,
        y: he * Math.random() * 1,
        a: 0,
        per: 1 / 112
        
    };
    reptile.push(partReptile);
    reptile.push({
        x: partReptile.x,
        y: partReptile.y,
        a: dpi / 2,
        per:partReptile.per
    });
    
}


// SINEW
sinew = [];

for (var i = 1; i <= 3000; i++) {
    partSinew = {
        x:  wi / 0.5 * Math.random(),
        y: he * Math.random() * dpi * Math.random(),
        a: 0,
        per: 1 / 720
        
    };
    sinew.push(partSinew);
    sinew.push({
        x: partSinew.x,
        y: partSinew.y,
        a: dpi / 2,
        per:partSinew.per
    });
    
}

//ARC
arc = [];

for (var i = 1; i <= 4000; i++) {
    partArc = {
        x:  wi / 0.765 * Math.random(),
        y: he * Math.random()* dpi * Math.random(),
        a: 0,
        per: 1 / 120
        
    };
    arc.push(partArc);
    arc.push({
        x: partArc.x,
        y: partArc.y,
        a: dpi / 2,
        per:partArc.per
    });
    
}




anim = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
    return window.setTimeout(callback, 1000 / 60);
};





