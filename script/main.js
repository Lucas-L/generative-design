var reptileb = document.querySelector(".reptileB");
var sinewb = document.querySelector(".sinewB");
var clearB=document.createElement("div");
var arcb = document.querySelector(".arcB");
var cos="cos",sin="sin";

reptileb.addEventListener("click", () => {
    anim(drawReptile);
    designChosen('reptileB')

})
sinewb.addEventListener("click", () => {
    anim(drawSinew);
    designChosen("sinewB")
})
clearB.addEventListener("click", () => {
    window.location.reload()
})

arcb.addEventListener("click", () => {
    anim(drawArc);
    designChosen("arcB")
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

}
