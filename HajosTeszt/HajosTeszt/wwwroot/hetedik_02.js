var kérdések01;
var kérdésSorszám = 0;

function letöltés01() {
    fetch('/questions.json')
        .then(Response => Response.json())
        .then(data => letöltésBefejeződött01(data));
}

function letöltésBefejeződött01(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések01 = d
    kérdésMegjelenítés01(0);
}
var kérdésMegjelenítés01 = function (kérdésSzáma) {
    let kérdés_szöveg01 = document.getElementById("kerdes_szoveg");
    let kép01 = document.getElementById("kep1");
    let válasz01 = document.getElementById("valasz1");
    let válasz02 = document.getElementById("valasz2");
    let válasz03 = document.getElementById("valasz3");

    kérdés_szöveg01.innerHTML = kérdések01[kérdésSzáma].questionText
    if (kérdések01[kérdésSzáma].image != "") {
        kép01.src = "https://szoft1.comeback.hu/hajo/" + kérdések01[kérdésSzáma].image;
    }
    else {
        kép01.src = " ";
    }
    
    válasz01.innerText = kérdések01[kérdésSzáma].answer1
    válasz02.innerText = kérdések01[kérdésSzáma].answer2
    válasz03.innerText = kérdések01[kérdésSzáma].answer3
}

function Vissza01() {
    if (kérdésSorszám == 0) {
        kérdésSorszám = kérdések01.length-1;
        //letöltés01();
        kérdésMegjelenítés01(kérdésSorszám);
    }
    else {
        //kérdésSorszám--;
        //letöltés01();
        kérdésMegjelenítés01(--kérdésSorszám);
    }
}

function Elore01() {
    if (kérdésSorszám == kérdések01.length-1) {
        kérdésSorszám = 0;
        //letöltés01();
        kérdésMegjelenítés01(kérdésSorszám);
        //document.getElementById("kerdes_szoveg").innerHTML = kérdések01[kérdésSorszám].questionTex;
    }
    else {
        //kérdésSorszám++;
        //letöltés01();
        kérdésMegjelenítés01(++kérdésSorszám);
        //document.getElementById("kerdes_szoveg").innerHTML = kérdések01[kérdésSorszám].questionTex;
    }
}

window.onload = () => {
    letöltés01();

    //letöltésBefejeződött01(d);
    //kérdésMegjelenítés01(kérdésSorszám);
}
