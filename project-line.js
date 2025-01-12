document.addEventListener("DOMContentLoaded", function() {
    var clicked = false;
    var activePr = 1;

    document.getElementById("next-project").addEventListener("click", function() {
        if (clicked == false && activePr <= 5) {
            activePr++;
            console.log(activePr)
            document.getElementById("project-line").style.animationName = "next";
            document.getElementById("project-line").style.animationDuration = "3s";
            document.getElementById("number-roller").style.animationName = "nextProj";
            document.getElementById("number-roller").style.animationDuration = "1s";
            document.getElementById("number-roller").style.animationTimingFunction = "ease-in-out"

            clicked = true;

            setTimeout(function() {
                    if (activePr == 2) {
                        document.getElementById("project-to-show").src = "projektFinal/project2_remake/index.html";
                        document.getElementById("prev-prev-project-number").innerHTML = "0";
                        document.getElementById("prev-project-number").innerHTML = "1";
                        document.getElementById("active-project-number").innerHTML = "2";
                        document.getElementById("next-project-number").innerHTML = "3";
                        document.getElementById("next-next-project-number").innerHTML = "4";
                        document.getElementById("active-project-text").innerHTML = "Nu har jag börjat lära mig HTML då det blev tråkigt att inte kunna skapa något visuellt. I samband med detta så var nian på väg mot sitt slut. När jag skulle titta vad jag skulle få i merit, så tyckte jag att hemsidan där jag skulle kolla var väldigt dålig då man behövde leta upp vilket ämne man hade ett specifikt betyg i. Helt onödigt då meriten är en summa av alla betygen! Så jag skapade min egna:";
                        document.getElementById("learned").innerHTML = "Vad jag har lärt samt tagit med mig från detta projektet: Hur man använder HTML och kopplar det med Javascript."
                    } else if (activePr == 3) {
                        document.getElementById("project-to-show").src = "projektFinal/blackjack/blackjack.html";
                        document.getElementById("prev-prev-project-number").innerHTML = "1";
                        document.getElementById("prev-project-number").innerHTML = "2";
                        document.getElementById("active-project-number").innerHTML = "3";
                        document.getElementById("next-project-number").innerHTML = "4";
                        document.getElementById("next-next-project-number").innerHTML = "5";
                        document.getElementById("active-project-text").innerHTML = "Nu har jag börjat på gymnasiet och förstår hur Visual Studio Code fungerar. Jag valde som projekt i ettan att göra ett BlackJack spel där man kör mot datorn och försöker vinna så ofta som möjligt";
                        document.getElementById("learned").innerHTML = "Vad jag har lärt samt tagit med mig från detta projektet: Hur man skapar en snyggare hemsida samt lägger in media på en sida."
                    } else if (activePr == 4) {
                        document.getElementById("project-to-show").src = "projektFinal/aporHemsida/index.html";
                        document.getElementById("prev-prev-project-number").innerHTML = "2";
                        document.getElementById("prev-project-number").innerHTML = "3";
                        document.getElementById("active-project-number").innerHTML = "4";
                        document.getElementById("next-project-number").innerHTML = "5";
                        document.getElementById("next-next-project-number").innerHTML = "6";
                        document.getElementById("active-project-text").innerHTML = "Jag går nu i tvåan och vi har fått i uppgift att skapa en hemsida där man ska skriva fakta om ett djur samt använda sig av CSS för att göra så att hemsidan ser snygg ut.";
                        document.getElementById("learned").innerHTML = "Vad jag har lärt samt tagit med mig från detta projektet: Animationer i CSS."
                    } else if (activePr == 5) {
                        document.getElementById("project-to-show").src = "projektFinal/Welovetr3n-main/index.html";
                        document.getElementById("prev-prev-project-number").innerHTML = "3";
                        document.getElementById("prev-project-number").innerHTML = "4";
                        document.getElementById("active-project-number").innerHTML = "5";
                        document.getElementById("next-project-number").innerHTML = "6";
                        document.getElementById("next-next-project-number").innerHTML = "Kontakta";
                        document.getElementById("active-project-text").innerHTML = "Ett till projekt som är värt att visa är ett som jag gjorde tillsammans med min klasskompis där vi skapar en hemsida som vi säljer kläder på.";
                        document.getElementById("learned").innerHTML = "Vad jag har lärt samt tagit med mig från detta projektet: Positionering i CSS."
                    } else if (activePr == 6) {
                        document.getElementById("project-to-show").src = "projektFinal/index.html";
                        document.getElementById("prev-prev-project-number").innerHTML = "4";
                        document.getElementById("prev-project-number").innerHTML = "5";
                        document.getElementById("active-project-number").innerHTML = "6";
                        document.getElementById("next-project-number").innerHTML = "_";
                        document.getElementById("next-next-project-number").innerHTML = "_";
                        document.getElementById("active-project-text").innerHTML = "Slutligen så lyfter jag fram detta projektet som du är inne på just nu. Denna hemsida är mitt gymnasieprojekt och fungerar som en portfolio för tidigare projekt och hur min programmeringsutveckling har gått.";
                        document.getElementById("learned").innerHTML = "Vad jag har lärt samt tagit med mig från detta projektet: Timing i Javascript samt animering med hjälp av Javascript och CSS"
                    }
            }, 1001);

            

            setTimeout(function() {
                document.getElementById("project-line").style.animationName = "";
                document.getElementById("number-roller").style.animationName = "";
                clicked = false;
            }, 3001)
        } else {
            document.getElementById("project-line").style.animationName = "error";
            document.getElementById("project-line").style.animationDuration = "1s";
            setTimeout(function() {
                document.getElementById("project-line").style.animationName = "";
            }, 1001)
        };
    });

    document.getElementById("prev-project").addEventListener("click", function() {
        if (clicked == false && activePr >= 2) {
            activePr--;
            console.log(activePr);
        
            document.getElementById("project-line").style.animation = "prev 3s";
            document.getElementById("number-roller").style.animation = "prevProj 1s ease-in-out";
        
            clicked = true;
        
            setTimeout(function() {
                if (activePr == 1) {
                    document.getElementById("project-to-show").src = "projektFinal/project1_remake/index.html";
                    document.getElementById("prev-prev-project-number").innerHTML = "_";
                    document.getElementById("prev-project-number").innerHTML = "0";
                    document.getElementById("active-project-number").innerHTML = "1";
                    document.getElementById("next-project-number").innerHTML = "2";
                    document.getElementById("next-next-project-number").innerHTML = "3";
                    document.getElementById("active-project-text").innerHTML = "Detta är mitt första projekt.";
                } else if (activePr == 2) {
                    document.getElementById("project-to-show").src = "projektFinal/project2_remake/index.html";
                    document.getElementById("prev-prev-project-number").innerHTML = "0";
                    document.getElementById("prev-project-number").innerHTML = "1";
                    document.getElementById("active-project-number").innerHTML = "2";
                    document.getElementById("next-project-number").innerHTML = "3";
                    document.getElementById("next-next-project-number").innerHTML = "4";
                    document.getElementById("active-project-text").innerHTML = "Nu har jag börjat lära mig HTML.";
                } else if (activePr == 3) {
                    document.getElementById("project-to-show").src = "projektFinal/blackjack/blackjack.html";
                    document.getElementById("prev-prev-project-number").innerHTML = "1";
                    document.getElementById("prev-project-number").innerHTML = "2";
                    document.getElementById("active-project-number").innerHTML = "3";
                    document.getElementById("next-project-number").innerHTML = "4";
                    document.getElementById("next-next-project-number").innerHTML = "5";
                    document.getElementById("active-project-text").innerHTML = "Blackjack-projekt.";
                } else if (activePr == 4) {
                    document.getElementById("project-to-show").src = "projektFinal/aporHemsida/index.html";
                    document.getElementById("prev-prev-project-number").innerHTML = "2";
                    document.getElementById("prev-project-number").innerHTML = "3";
                    document.getElementById("active-project-number").innerHTML = "4";
                    document.getElementById("next-project-number").innerHTML = "5";
                    document.getElementById("next-next-project-number").innerHTML = "6";
                    document.getElementById("active-project-text").innerHTML = "Apor hemsida projekt.";
                } else if (activePr == 5) {
                    document.getElementById("project-to-show").src = "projektFinal/Welovetr3n-main/index.html";
                    document.getElementById("prev-prev-project-number").innerHTML = "3";
                    document.getElementById("prev-project-number").innerHTML = "4";
                    document.getElementById("active-project-number").innerHTML = "5";
                    document.getElementById("next-project-number").innerHTML = "6";
                    document.getElementById("next-next-project-number").innerHTML = "Kontakta";
                    document.getElementById("active-project-text").innerHTML = "Welovetr3n-projekt.";
                } else if (activePr == 6) {
                    document.getElementById("project-to-show").src = "projektFinal/gyarCopy/index.html";
                    document.getElementById("prev-prev-project-number").innerHTML = "4";
                    document.getElementById("prev-project-number").innerHTML = "5";
                    document.getElementById("active-project-number").innerHTML = "6";
                    document.getElementById("next-project-number").innerHTML = "capcha";
                    document.getElementById("next-next-project-number").innerHTML = "_";
                    document.getElementById("active-project-text").innerHTML = "6";
                }
            }, 1001);
        
            setTimeout(function() {
                document.getElementById("project-line").style.animation = "";
                document.getElementById("number-roller").style.animation = "";
                clicked = false;
            }, 3001);
        } else {
            document.getElementById("project-line").style.animation = "error 1s";
            setTimeout(function() {
                document.getElementById("project-line").style.animation = "";
            }, 1001);
        }
        
    });

    document.getElementById("click-text").addEventListener("click", function(){
        document.getElementById("project-line").style.zIndex = "-1"
        document.getElementById("project").style.animationName = "viewProject";
        document.getElementById("project").style.animationDuration = "1s";
        document.getElementById("project").style.animationFillMode = "forwards";
        document.getElementById("project").style.backdropFilter = "";
        document.getElementById("click-text").innerText = "";
        document.getElementById("pr-text-container").style.display = "none";
        document.getElementById("close").style.animationName = "displayClose";
        document.getElementById("close").style.animationDuration = "1s";
        document.getElementById("close").style.animationFillMode = "forwards";
    });

    document.getElementById("close").addEventListener("click", function() {
        document.getElementById("project").style.backdropFilter = "blur()";
        document.getElementById("project").style.animationName = "closeProject";
        document.getElementById("project").style.animationDuration = "1s";
        document.getElementById("project").style.animationFillMode = "";
        setTimeout(function() {
            document.getElementById("pr-text-container").style.display = "";
            document.getElementById("click-text").innerText = "Click To View";
            document.getElementById("project-line").style.zIndex = "-2"
        }, 1000);
        document.getElementById("close").style.animationName = "";
        document.getElementById("close").style.visibility = "hidden";
    });
});