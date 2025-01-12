document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("startReset-button").style.backgroundColor = "green"

    function handleKeyUp(event) {

        if (event.key == "Enter") {
            var computer = Math.floor(Math.random()*3);

            var user = document.getElementById("player-input").innerHTML;
            
            console.log(computer)
            console.log(user)
            document.getElementById("startReset-button").style.display = "";
            if (computer == 0 && user == "sten" || computer == 1 && user == "sax" || computer == 2 && user == "påse") {
                document.getElementById("check-winner").innerHTML = "Lika!";
            } else if (computer == 0 && user == "påse" || computer == 1 && user == "sten" || computer == 2 && user == "sax") {
                document.getElementById("check-winner").innerHTML = "Du Vann!";
            } else {
                document.getElementById("check-winner").innerHTML = "Datorn Vann!";
            }
        } else if (event.key.toString().length == 1) {
            document.getElementById("player-input").innerHTML += event.key;
            console.log(user)
        } else if (event.key.toString() == "Backspace") {
            document.getElementById("player-input").innerHTML = document.getElementById("player-input").innerHTML.slice(0, -1);
        }
    }

    document.getElementById("startReset-button").addEventListener("click", function() {

        if (document.getElementById("startReset-button").style.backgroundColor == "green") {

            document.getElementById("start").style.display = "none";

            document.getElementById("startReset-button").style.display = "none";

            document.getElementById("startReset-button").style.backgroundColor = "blue";
        
            document.getElementById("reset").style = "";
    
            document.getElementById("start-text").innerHTML = "Skriv sten sax eller påse: ";

            document.addEventListener("keyup", handleKeyUp);
        } else {
            document.getElementById("check-winner").innerHTML = "";

            document.removeEventListener("keyup", handleKeyUp);

            document.getElementById("player-input").innerHTML = "";

            document.getElementById("reset").style.display = "none";

            document.getElementById("startReset-button").style.backgroundColor = "green";
        
            document.getElementById("start").style = "";
    
            document.getElementById("start-text").innerHTML = "";
        }
    })
})