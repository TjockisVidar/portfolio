//alla variabler
var kortSpelare = [] //en tom lista på spelarens kort
var kortHus = [] //en tom lista på husets/datorns kort
var hKv = 0 //Värdet att spelarens kort
var sKv = 0 //värdet på husets kort
var sPoang = 0
var hPoang = 0
var randomKort //variabel för att ta fram ett slumpmässigt kort
var randomKort1 //variabel för att hålla koll på ett slumpmässigt tar för första kortet som huset ska få
var randomBild //variabel för att ta fram en slumpmässig bild
var listaKortS = [] //lista för värden på kort som spelaren har
var listaKortH = [] //lista för värden på kort som huset har
var kortEss = ["https://i.ibb.co/xCnFx7p/clubs-ace.png", "https://i.ibb.co/MRm8WZH/diamonds-ace.png", "https://i.ibb.co/cwGwjS6/hearts-ace.png", "https://i.ibb.co/n11fvsJ/spades-ace.png"] //en lista på alla ess
var kortTv = ["https://i.ibb.co/NNfB9JZ/clubs-2.png", "https://i.ibb.co/VD0qfWM/diamonds-2.png", "https://i.ibb.co/PTywByF/hearts-2.png", "https://i.ibb.co/vv91P4r/spades-2.png"] //en lista på alla tvåor
var kortTr = ["https://i.ibb.co/yq3sxJ4/clubs-3.png", "https://i.ibb.co/tHJxbjP/diamonds-3.png", "https://i.ibb.co/dg0ZYQQ/hearts-3.png", "https://i.ibb.co/Mg2nqnW/spades-3.png"] //en lista på alla treor
var kortFy = ["https://i.ibb.co/CHNMPkj/clubs-4.png", "https://i.ibb.co/9H1x1vL/diamonds-4.png", "https://i.ibb.co/fS7hzv3/hearts-4.png", "https://i.ibb.co/HgzcsR5/spades-4.png"] //en lista på alla fyror
var kortFe = ["https://i.ibb.co/k5VyqnK/clubs-5.png", "https://i.ibb.co/263HLj8/diamonds-5.png", "https://i.ibb.co/8cy7jq5/hearts-5.png", "https://i.ibb.co/YLTfyWq/spades-5.png"] //en lista på alla femmor
var kortSe = ["https://i.ibb.co/2s1LjV3/clubs-6.png", "https://i.ibb.co/DLspxC2/diamonds-6.png", "https://i.ibb.co/CsZC15H/hearts-6.png", "https://i.ibb.co/8XtX4Fc/spades-6.png"] //en lista på alla sexor
var kortSj = ["https://i.ibb.co/ZdqMYP5/clubs-7.png", "https://i.ibb.co/fXYGRKk/diamonds-7.png", "https://i.ibb.co/wd97WxH/hearts-7.png", "https://i.ibb.co/Xz6jkvy/spades-7.png"] //en lista på alla sjuor
var kortAt = ["https://i.ibb.co/6F84yMT/clubs-8.png", "https://i.ibb.co/DwFcL52/diamonds-8.png", "https://i.ibb.co/t4vzykT/hearts-8.png", "https://i.ibb.co/9y8QQHM/spades-8.png"] //en lista på alla åttor
var kortNi = ["https://i.ibb.co/ncQkrhJ/clubs-9.png", "https://i.ibb.co/dJRJKxb/diamonds-9.png", "https://i.ibb.co/9bK7JJk/hearts-9.png", "https://i.ibb.co/2cGtKfN/spades-9.png"] //en lista på alla nior
var kortTi = ["https://i.ibb.co/CJnR0wL/clubs-10.png", "https://i.ibb.co/gSXWX55/diamonds-10.png", "https://i.ibb.co/ydjy6cg/hearts-10.png", "https://i.ibb.co/KDhPx5K/spades-10.png", "https://i.ibb.co/QXVGDYZ/clubs-jack.png", "https://i.ibb.co/njJpFTb/clubs-king.png", "https://i.ibb.co/SJDnZtF/clubs-queen.png", "https://i.ibb.co/WKFfTN9/diamonds-jack.png", "https://i.ibb.co/fd3SwCF/diamonds-king.png", "https://i.ibb.co/YkSvtt0/diamonds-queen.png", "https://i.ibb.co/pdhGjBD/hearts-jack.png", "https://i.ibb.co/943ykP4/hearts-king.png", "https://i.ibb.co/3zDKHXs/hearts-queen.png", "https://i.ibb.co/PmzNTcZ/spades-jack.png", "https://i.ibb.co/LgQyQwb/spades-king.png", "https://i.ibb.co/fpkSD1m/spades-queen.png"] //en lista på alla tior
var baksida = ["https://i.ibb.co/hC2JWwR/kortBb.png", "https://i.ibb.co/jfLCtpC/kortRb.png"]
var randomTi = Math.floor(Math.random()*kortTi.length) //variabel som håller koll på vilket kort från tio listan som ska tas
var randomFarg = Math.floor(Math.random()*2) //variabel som håller koll på vilket kort från baksida listan som ska tas
var forst = 0

function loggaIn() { //funktion som säger att logga in funktionen inte är klar
    alert("Denna funktionen är under konstruktion")
}

function registrera() { //funktion som säger att registrera funktionen inte är klar
    alert("Denna funktionen är under konstruktion")
}

function reglerKnapp() { //funktion som öppnar regel sidan
    document.getElementById("start").classList = "hide"
    document.getElementById("loggaIn").classList = "hide"
    document.getElementById("registrera").classList = "hide"
    document.getElementById("regler").classList = "hide"

    document.getElementById("reglerI").classList = ""
}

function backa() { //funktion som går tillbaka från regel sidan till startsidan
    document.getElementById("sBlock").classList = "hide"
    document.getElementById("start").classList = "startKnapparKH"
    document.getElementById("loggaIn").classList = "startKnapparKV"
    document.getElementById("registrera").classList = "startKnapparKH"
    document.getElementById("regler").classList = "startKnapparKV"
    document.getElementById("reglerI").classList = "hide"
}

function start() { //funktion som startar igång spelet efter att ha klickat på startknappen
    sKv = 0
    hKv = 0
    if (forst == 0) {
        forst = 1
        sPoang = 0
        hPoang = 0
        document.getElementById("sPoang").innerHTML = "Dina poäng: " + sPoang
        document.getElementById("hPoang").innerHTML = "Husets poäng: " + hPoang
    }

    kortTill("spelare")
    kortTill("spelare")

    kortTill("dator")
    kortH(baksida[Math.floor(Math.random()*2)])
    randomKort = Math.floor(Math.random()*13)+2
    if (randomKort >= 10 && randomKort != 14) {
        kortHus.push(10)
    } else if (randomKort == 14) {
        kortHus.push(11)
    } else {
        kortHus.push(randomKort)
    }

    sKv = kortSpelare[0]+kortSpelare[1]
    hKv = kortHus[0]+kortHus[1]

    if (sKv == 21) {
        for (i = 0; i < listaKortS.length; i++) {
            document.getElementById("kortSblock").removeChild(listaKortS[i])
        }
        kortSpelare = []
        listaKortS = []
    } else if (sKv > 21 && kortSpelare.indexOf(14) != -1) {
        kortSpelare[kortSpelare.indexOf(14)] = 1
    }

    document.getElementById("sK").innerHTML = "Dina korts värde: " + sKv
    document.getElementById("hK").innerHTML =  "Huset första korts värde: " + kortHus[0]
    document.getElementById("sBlock").classList = ""
    document.getElementById("knapparID").classList = "Knappar"
    document.getElementById("start").classList = "startKnapparAnimationHogerT"
    document.getElementById("loggaIn").classList = "startKnapparAnimationVansterT"
    document.getElementById("registrera").classList = "startKnapparAnimationHogerT"
    document.getElementById("regler").classList = "startKnapparAnimationVansterT"
    document.getElementById("borjaOmKnapp").classList = "hide"
}

function borjaOm() { //funktion som börjar om programmet när hus eller spelare har vunnit
    for (i = 0; i < listaKortS.length; i++) {
        document.getElementById("kortSblock").removeChild(listaKortS[i])
    }
    for (i = 0; i < listaKortH.length; i++) {
        document.getElementById("kortHblock").removeChild(listaKortH[i])
    }
    kortSpelare = []
    kortHus = []
    listaKortS = []
    listaKortH = []
    document.getElementById("v").innerHTML = ""
    start()
}

function kortS(bildS) { //skapar bild element till spelare
    var img = document.createElement("img")
    img.src = bildS
    img.classList = "kortS"

    document.getElementById("kortSblock").appendChild(img)
    listaKortS.push(img)
}

function kortH(bildH) { //skapar bild element till huset
    var img = document.createElement("img")
    img.src = bildH
    img.classList = "kortH"

    document.getElementById("kortHblock").appendChild(img)
    listaKortH.push(img)
}

function kortTill(p) { //funktion som ger kort till spelare eller huset beroende på vilket värde kortet ska ha
    var spelare = p
    randomBild = Math.floor(Math.random()*4)
    randomTi = Math.floor(Math.random()*kortTi.length)
    randomKort = Math.floor(Math.random()*13)+2
    
    if (spelare == "spelare") {
        if (sKv > 21 && kortSpelare.indexOf(14) != -1) {
            kortSpelare[kortSpelare.indexOf(14)] = 1
            sKv = 0
            for (i = 0; i < kortSpelare.length; i++) {
                sKv = sKv+kortSpelare[i]
            }
        }
        if (randomKort >= 10 && randomKort != 14) {
            kortSpelare.push(10)
            sKv = sKv+10
        } else if (randomKort == 14) {
            kortSpelare.push(11)
            sKv = sKv+11
        } else {
            kortSpelare.push(randomKort)
            sKv = sKv+randomKort
        }
        if (randomKort == 2) {
            kortS(kortTv[randomBild])
        } else if (randomKort == 3) {
            kortS(kortTr[randomBild])
        } else if (randomKort == 4) {
            kortS(kortFy[randomBild])
        } else if (randomKort == 5) {
            kortS(kortFe[randomBild])
        } else if (randomKort == 6) {
            kortS(kortSe[randomBild])
        } else if (randomKort == 7) {
            kortS(kortSj[randomBild])
        } else if (randomKort == 8) {
            kortS(kortAt[randomBild])
        } else if (randomKort == 9) {
            kortS(kortNi[randomBild])
        } else if (randomKort == 14) {
            kortS(kortEss[randomBild])
        } else if (randomKort >= 10 && randomKort != 14) {
            kortS(kortTi[randomTi])
        }
    } else if (spelare == "dator") {
        if (hKv > 21 && kortHus.indexOf(14) != -1) {
            kortHus[kortHus.indexOf(14)] = 1
            hKv = 0
            for (i = 0; i < kortHus.length; i++) {
                hKv = hKv+kortHus[i]
            }
        }
        if (randomKort >= 10 && randomKort != 14) {
            kortHus.push(10)
            hKv = hKv+10
        } else if (randomKort == 14) {
            kortHus.push(11)
            hKv = hKv+11
        } else {
            kortHus.push(randomKort)
            hKv = hKv+randomKort
        }
        if (randomKort == 2) {
            kortH(kortTv[randomBild])
        } else if (randomKort == 3) {
            kortH(kortTr[randomBild])
        } else if (randomKort == 4) {
            kortH(kortFy[randomBild])
        } else if (randomKort == 5) {
            kortH(kortFe[randomBild])
        } else if (randomKort == 6) {
            kortH(kortSe[randomBild])
        } else if (randomKort == 7) {
            kortH(kortSj[randomBild])
        } else if (randomKort == 8) {
            kortH(kortAt[randomBild])
        } else if (randomKort == 9) {
            kortH(kortNi[randomBild])
        } else if (randomKort == 14) {
            kortH(kortEss[randomBild])
        } else if (randomKort >= 10 && randomKort != 14) {
            kortH(kortTi[randomTi])
        }
    }
}

function kort1() { //funktion som ger första kortet till huset
    document.getElementById("kortHblock").removeChild(listaKortH[1])
    listaKortH.splice(1)

    randomKort1 = kortHus[1]

    if (randomKort1 == 2) {
        kortH(kortTv[randomBild])
    } else if (randomKort1 == 3) {
        kortH(kortTr[randomBild])
    } else if (randomKort1 == 4) {
        kortH(kortFy[randomBild])
    } else if (randomKort1 == 5) {
        kortH(kortFe[randomBild])
    } else if (randomKort1 == 6) {
        kortH(kortSe[randomBild])
    } else if (randomKort1 == 7) {
        kortH(kortSj[randomBild])
    } else if (randomKort1 == 8) {
        kortH(kortAt[randomBild])
    } else if (randomKort1 == 9) {
        kortH(kortNi[randomBild])
    } else if (randomKort1 == 11) {
        kortH(kortEss[randomBild])
    } else if (randomKort1 == 10) {
        kortH(kortTi[randomTi])
    }

    if (hKv > 21 && kortHus.indexOf(14) != -1) {
        kortHus[kortHus.indexOf(14)] = 1
        hKv = 0
        for (i = 0; i < kortHus.length; i++) {
            hKv = hKv+kortHus[i]
        }
    }
}

function vinstCheck() { //funktion som tittar vem som vinner
    hKv = 0
    for (i = 0; i < kortHus.length; i++) {
        hKv = hKv+kortHus[i]
    }
    if (sKv < 21 && hKv < sKv || sKv == 21 || hKv > 21) {
        document.getElementById("v").innerHTML = "Du vann"
        sPoang = sPoang+1
    } else if (hKv < 21 && sKv < hKv || hKv == 21 || sKv > 21) {
        document.getElementById("v").innerHTML = "Huset vann"
        hPoang = hPoang+1
    } else if (sKv == hKv) {
        document.getElementById("v").innerHTML = "Lika, huset vann"
        hPoang = hPoang+1
    }
    document.getElementById("sPoang").innerHTML = "Dina poäng: " + sPoang
    document.getElementById("hPoang").innerHTML = "Husets poäng: " + hPoang
    document.getElementById("hK").innerHTML = "Husets korts värde: " + hKv
    document.getElementById("knapparID").classList = "hide"
    document.getElementById("borjaOmKnapp").classList = "spelKnappar"
}

function hit() { //funktion som utför "hit", alltså ger kort till spelaren
    kortTill("spelare")

    if (sKv > 21) {
        if (kortSpelare.indexOf(14) != -1) {
            kortSpelare[kortSpelare.indexOf(14)] = 1
        } else {
            kort1()
            vinstCheck()
        }
    } else if (sKv == 21) {
        vinstCheck()
    }
    document.getElementById("sK").innerHTML = "Dina korts värde: " + sKv
}

function stand() { //funktion som gör så att huset får kort
    kort1()

    while (hKv < sKv && hKv != sKv) {
        kortTill("dator")
        if (hKv > 21 && kortHus.indexOf(14) != -1) {
            kortHus[kortHus.indexOf(14)] = 1
        }
    }

    vinstCheck()
}