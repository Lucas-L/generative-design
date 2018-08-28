var reptileb = document.querySelector(".reptileB");
var sinewb = document.querySelector(".sinewB");
var clearB=document.createElement("div");
var arcb = document.querySelector(".arcB");
var linesB = document.querySelector(".linesB");
var lychenB = document.querySelector(".lychenB");
var pastaB = document.querySelector(".pastaB");
var close = document.querySelector(".close")
var cos="cos",sin="sin";

const resize = () => {
    canvas.width=window.innerWidth
    canvas.height=window.innerHeight
}

resize()
window.addEventListener('resize',resize)

reptileb.addEventListener("click", () => {
    anim(drawReptile);
    designChosen('reptileB')

})
sinewb.addEventListener("click", () => {
    anim(drawSinew);
    designChosen("sinewB")
})

arcb.addEventListener("click", () => {
    anim(drawArc);
    designChosen("arcB")
})

linesB.addEventListener("click", () => {
    anim(drawLines);
    designChosen("linesB")
})
lychenB.addEventListener("click", () => {
    anim(drawLychen);
    designChosen("lychenB")
})
pastaB.addEventListener("click", () => {
    anim(drawPasta);
    designChosen("pastaB")
})

clearB.addEventListener("click", () => {
    window.location.reload()
})
close.addEventListener("click",() => {
    document.querySelector(".perlinSelector").style.display="none"
})


function designChosen(elem){

    var target=document.querySelector("."+elem);
    var choice=document.querySelector(".choice");
    var choiceActive=document.querySelector(".choiceActive");


    target.classList.add("chosen")
    clearB.classList.add("buttonC");
    clearB.classList.add("clearB");
    choice.style.display="none";
    choiceActive.style.display="block";
    clearB.innerHTML="  clear ";
    choiceActive.appendChild(target);
    choiceActive.appendChild(clearB);
    close.style.visibility="visible"

}
