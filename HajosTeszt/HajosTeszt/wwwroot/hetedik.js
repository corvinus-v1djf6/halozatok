/*
function myFunction() {
    document.getElementById("kerdes_szoveg").innerHTML = "Hello World";
}


function katt() {
    document.getElementById("kerdes_szoveg").innerHTML = "Viisza World";
}
*/
var kerdesek;
var k = 0;
var helyes;
window.onload = function () {letoltes()}

var letoltes = function () {
    fetch('/questions.json')
    .then(response => response.json())
    .then(data => letöltésBefejeződött(data)
    );
}

var letöltésBefejeződött = function (d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kerdesek = d;
    kérdésMegjelenítés(k);
}

    /*let kerdes = document.getElementById("kerdes_szoveg");
    kerdes.innerHTML(kerdesek);
    for (var i = 0; i < 3; i++) {
        //console.log(d[i].questionText)
        let elem = document.createElement("li")
        elem.innerHTML = d[i].questionText;
        kerdes_szoveg.appendChild(elem)
    }*/


var kérdésMegjelenítés = function (k) {
    document.getElementById("kerdes_szoveg").innerHTML = kerdesek[kerdes].questionText;
}
    
    //kerdes.innerHTML += "kérdés";

    /*for (var i = 0; i < 10; i++) {
        console.log(kérdés[i].questionText)
        let elem = document.createElement("li")
        elem.innerHTML = kérdés[i].questionText
        kerdes_szoveg.appendChild(elem)
    }*/


    //console.log("eddig lefut");
   // letöltésBefejeződött();
   // console.log("eddig lefut2");
    //console.log(kérdés);
    //kérdésMegjelenítés(kérdés);

