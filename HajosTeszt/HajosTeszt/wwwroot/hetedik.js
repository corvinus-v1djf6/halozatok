
var kerdesek;
var kérdésszam = 0;
var helyes;


var letoltes = function () {
    fetch('/questions.json')
    .then(response => response.json())
    .then(data => letöltésBefejeződött(data)
    );
}

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kerdesek = d;
    kérdésMegjelenítés(0);
}

    /*let kerdes = document.getElementById("kerdes_szoveg");
    kerdes.innerHTML(kerdesek);
    for (var i = 0; i < 3; i++) {
        //console.log(d[i].questionText)
        let elem = document.createElement("li")
        elem.innerHTML = d[i].questionText;
        kerdes_szoveg.appendChild(elem)
    }*/


var kérdésMegjelenítés = function (kérdésSorSzam) {
    //document.getElementById("kerdes_szoveg").innerHTML = kerdesek[kérdésSorSzam].questionText;
    //document.getElementById("kep1").src = "https://szoft1.comeback.hu/hajo/" + kerdesek[kérdésszam].image;

    let kérdés_szöveg = document.getElementById("kerdes_szoveg");
    //let kép = document.getElementById("kep1");
    let valasz1 = document.getElementById("valasz1");
    let valasz2 = document.getElementById("valasz2");
    let valasz3 = document.getElementById("valasz3");

    kérdés_szöveg.innerHTML = kerdesek[kérdésSorSzam].questionText
    //kép.src = "https://szoft1.comeback.hu/hajo/" + kerdesek[kérdésSorSzam].image
    valasz1.innerText = kerdesek[kérdésSorSzam].answer1
    valasz2.innerText = kerdesek[kérdésSorSzam].answer2
    valasz3.innerText = kerdesek[kérdésSorSzam].answer3
    
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

window.onload = function () {
    letoltes();
    /*
    //előre
    document.getElementById("Elore").onclick = () => {
        if (kérdésszam == kerdesek.length - 1) {
            kérdésszam = 0;
            letoltes();
        }
        else {
            kérdésszam++;
            letoltes();
        }
    }
    //document.getElementById("kerdes_szoveg").innerHTML = "Hello World"
   
    //vissza
    document.getElementById("Vissza").onclick = () => {
        if (kérdésszam == 0) {
            kérdésszam = kerdesek.length - 1;
            letöltes();
        }
        else {
            kérdésszam--;
            letoltes();
        }
    }
    //document.getElementById("kerdes_szoveg").innerHTML = "Viisza World";
    */

    function nextQuestion() {
        if (kérdésszam == kerdesek.length - 1) {
            kérdésszam = 0;
            kérdésMegjelenítés(kérdésszam);
        }
        else {
            kérdésMegjelenítés(kérdésszam++);
        }
    }

    function prevQuestion() {
        if (kérdésszam != 0) {
            kérdésMegjelenítés(kérdésszam--);
        }
        else {
            kérdésszam = kerdesek.length - 1;
            kérdésMegjelenítés(kérdésszam);
        }
    }

    kérdésMegjelenítés(kérdésszam);
    letöltésBefejeződött(d);
    
}






