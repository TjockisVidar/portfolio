document.addEventListener("DOMContentLoaded", start);

function start() {
    var wrap = document.getElementById("container");
    
    for (var i = 0; i < 100; i++) {

        var div = document.createElement("div")
        div.classList = ("block")
        div.id = ("id" + i)
        div.style.animationDuration = "10s"
        var dotL = document.createElement("div")
        dotL.classList.add("dotLblock")
        var dotR = document.createElement("div")
        dotR.classList.add("dotRblock")
        var dotM = document.createElement("div")
        dotM.classList.add("dotMblock")

        div.style.animationDelay = i * 200 + "ms"
        wrap.appendChild(div)
        div.appendChild(dotL)
        div.appendChild(dotR)
        div.appendChild(dotM)
    }
}