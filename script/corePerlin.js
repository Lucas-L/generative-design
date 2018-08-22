var canvas;
canvas = document.getElementsByTagName('canvas')[0];

var wi, he, dpi;
wi = canvas.width = 1555;
he = canvas.height = 780;
dpi = 2 * Math.PI;

// CONTEXT
var context;
context = canvas.getContext('2d');
context.fillStyle = '#fff';
context.fillRect(0, 0, wi, he);
context.fillStyle = 'rgba(1,1,1,0.3)';
noise.seed(Math.random());


var drawCos;
drawCos = function (theme) {
    
    var a, pa, v, j, particleFinals;
    particleFinals = [];
    for (j = 0; j < theme.length; j++) {
        
            pa = theme[j];
            v = noise.perlin2(pa.x * pa.per, pa.y * pa.per);
            context.beginPath();
            context.fillStyle = "hsla(" + (Math.floor(v * 360)) + ", 20%, 40%, 0.1)"; //Couleur , proche du noir , intensitié color
            context.fillRect(pa.x, pa.y, 2.0, 2.0); // Espacement x,y et epaisseur x,y
            pa.he++;
            a = v * 2 * Math.PI + pa.a;
            pa.x += Math.cos(a);
            particleFinals.push(pa.y += Math.sin(a));
            context.closePath();
        
    

    }    
    

    return particleFinals;
    
};
var drawSin;
drawSin = function (theme) {
    
    var a, pa, v, j, particleFinals;
    particleFinals = [];
    for (j = 0; j < theme.length; j++) {
        
            pa = theme[j];
            v = noise.perlin2(pa.x * pa.per, pa.y * pa.per);
            context.beginPath();
            context.fillStyle = "hsla(" + (Math.floor(v * 360)) + ", 45%, 80%, 1)"; //Couleur , proche du noir , intensitié color
            context.fillRect(pa.x, pa.y, 2.0, 2.0); // Espacement x,y et epaisseur x,y
            pa.he++;
            a = v * 2 * Math.PI + pa.a;
            pa.x += Math.sin(a);
            particleFinals.push(pa.y += Math.cos(a));
            context.closePath();
        }
        
    return particleFinals;
    
};
var drawTan;
drawTan = function (theme) {
    
    var a, pa, v, j, particleFinals;
    particleFinals = [];
    for (j = 0; j < theme.length; j++) {
    
            pa = theme[j];
            v = noise.perlin2(pa.x * pa.per, pa.y * pa.per);
            context.beginPath();
            context.fillStyle = "hsla(" + (v * 60) + ", 45%, 80%, 1)"; //Couleur , proche du noir , intensitié color
            context.fillRect(pa.x, pa.y, 2.0, 2.0); // Espacement x,y et epaisseur x,y
            pa.he++;
            a = v * 0.5 * Math.PI + pa.a;
            pa.x += Math.sin(a);
            particleFinals.push(pa.y += Math.cos(a));
            context.closePath();
    }

    
    return particleFinals;
    
};
var drawFib;
function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
}

let rdHslaVal= "hsla(" + randomVal(Math.random() * 1 , 100) + "," + randomVal(40, 75) + "%," + randomVal(40,60) + "%, 0.1)";
drawFib= function (theme){
    var a, pa, v, j, particleFinals;
    particleFinals = [];
    
    for (j = 0; j < theme.length; j++) {
    
            pa = theme[j];
            v = noise.perlin2(pa.x * pa.per, pa.y * pa.per);
            context.beginPath();
            

            context.fillStyle = rdHslaVal //Couleur , proche du noir , intensitié color
            context.fillRect(pa.x, pa.y, 1, 3.0); // Espacement x,y et epaisseur x,y
            pa.he++;
            a = (v + Math.sqrt(5)) / 2  * Math.random() 
            pa.x += (a + Math.sqrt(5)) / 2  * Math.random()
            particleFinals.push(pa.y += (a + Math.sqrt(5)) / 2 );
            context.closePath();
    }

    
    return particleFinals;
}




drawReptile = function () {
    anim(drawReptile);
    return drawCos(reptile);
};
drawSinew = function () {
    anim(drawSinew);
    return drawSin(sinew);
};
drawArc = function () {
    anim(drawArc);
    return drawTan(arc);
};
drawLines = () => {
    anim(drawLines);
    return drawFib(lines)
}