

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
        x:  wi / 0.61 * Math.random(),
        y: he * 6 * dpi * Math.random(),
        a: 0,
        per: 1 / 420
        
    };
    arc.push(partArc);
    arc.push({
        x: partArc.x,
        y: partArc.y,
        a: dpi / 2,
        per:partArc.per
    });
    
}

//LINES
lines = [];
for(var i = 1;i <= 10000;i++){
    partLines= {
        x:  wi * Math.random()  * (1 + Math.sqrt(5)) / 2,
        y: he * 0.09 * dpi * Math.random() * 2,
        a: 0,
        per: 1 / 620
        
    };
    lines.push(partLines);
    lines.push({
        x: partLines.x,
        y: partLines.y,
        a: dpi / 2,
        per:partLines.per
    });
}

//Lychen
lychen = [];
for(var i = 1;i <= (32000 +Math.random() * 40000);i++){
    partlychen= {
        x: wi / 0.61 * Math.random(),
        y:he * 6 * dpi * Math.random() / 5  ,
        a: 02,
        per: 1 / Math.random() * 13000
        
    };
    lychen.push(partlychen);
    lychen.push({
        x: partlychen.x,
        y: partlychen.y,
        a: dpi / 2,
        per:partlychen.per
    });
}

//TEST 
pasta = [];
for(var i = 1;i <= (7000);i++){
    partpasta= {
        x:  Math.random() * wi,
        y:he * 1.2 * dpi * Math.random() / 7  ,
        a: 20*Math.random(),
        per:  1 / 500
        
    };
    pasta.push(partpasta);
    pasta.push({
        x: partpasta.x,
        y: partpasta.y,
        a: dpi / 2,
        per:partpasta.per
    });
}

anim = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
    return window.setTimeout(callback, 1000 / 60);
};





