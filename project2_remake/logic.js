document.addEventListener("DOMContentLoaded", function() {
    var merit = 0;
    var chosen = 0;

    document.getElementById("buttonA").addEventListener("click", function() {
        merit += 20;
        chosen++;
        document.getElementById("amount").innerHTML = "Du har lagt in " + chosen + " ämnen"
    })
    document.getElementById("buttonB").addEventListener("click", function() {
        merit += 17.5;
        chosen++;
        document.getElementById("amount").innerHTML = "Du har lagt in " + chosen + " ämnen"
    })   
    document.getElementById("buttonC").addEventListener("click", function() {
        merit += 15;
        chosen++;
        document.getElementById("amount").innerHTML = "Du har lagt in " + chosen + " ämnen"
    })
    document.getElementById("buttonD").addEventListener("click", function() {
        merit += 12.5;
        chosen++;
        document.getElementById("amount").innerHTML = "Du har lagt in " + chosen + " ämnen"
    })
    document.getElementById("buttonE").addEventListener("click", function() {
        merit += 10;
        chosen++;
        document.getElementById("amount").innerHTML = "Du har lagt in " + chosen + " ämnen"
    })
    document.getElementById("buttonF").addEventListener("click", function() {
        chosen++;
        document.getElementById("amount").innerHTML = "Du har lagt in " + chosen + " ämnen"
    })
    document.getElementById("count").addEventListener("click", function() {
        document.getElementById("merit").innerHTML = "Din merit är: " + merit + " poäng"
    })
})