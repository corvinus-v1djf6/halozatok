var kérdések;
var kérdésSorszám = 0;

function letöltés() {
    /*fetch('questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data));*/

    fetch('/questions/1')
        .then(response => response.json())
        .then(data => kérdésMegjelenítés(data));
}

function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => kérdésMegjelenítés(data));
}   

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d
    kérdésMegjelenítés(0);
}

   function kérdésMegjelenítés(kérdés) {
    console.log(kérdés);
    document.getElementById("kerdes_szoveg").innerText = kérdés.questionText
    document.getElementById("valasz1").innerText = kérdés.answer1
    document.getElementById("valasz2").innerText = kérdés.answer2
    document.getElementById("valasz3").innerText = kérdés.answer3
   // document.getElementById("kep1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;

       if (kérdés.image != "") {
           document.getElementById("kep1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
       }
       else {
           document.getElementById("kep1").src = "";
           //"kep1".src = " ";
           //console.log("ures");
       }
}


window.onload = () => {

    letöltés();

   document.getElementById("Vissza").onclick = () => {

        if (kérdésSorszám == 0) {
            kérdésSorszám = 859 - 1
            kérdésBetöltés(kérdésSorszám);
        }
        else {
            kérdésBetöltés(--kérdésSorszám);
        }

    }

    document.getElementById("Elore").onclick = () => {

        if (kérdésSorszám == 859 - 1) {
            kérdésSorszám = 0;
            kérdésBetöltés(kérdésSorszám);
        }
        else {
            kérdésBetöltés(++kérdésSorszám);
        }

}


    document.getElementById("valasz1").onclick = () => {

        //document.getElementById("valasz1").innerText = kérdés.correctAnswer
        if (kérdésBetöltés(kérdésSorszám).correctAnswer == 1) {
            document.getElementById("valasz1").style.background = "darkgreen";
        }
        else {
            document.getElementById("valasz1").style.background = "red";
            document.getElementById("valasz" + kérdések[kérdésSorszám].correctAnswer).style.background = "darkgreen";
        }

        document.getElementById("valasz1").style.pointerEvents = 'none';
        document.getElementById("valasz2").style.pointerEvents = 'none';
        document.getElementById("valasz3").style.pointerEvents = 'none';

    }

    document.getElementById("valasz2").onclick = () => {

        if (kérdések[kérdésSorszám].correctAnswer == 2) {
            document.getElementById("valasz2").style.background = "darkgreen";
        }
        else {
            document.getElementById("valasz2").style.background = "red";
            document.getElementById("valasz" + kérdések[kérdésSorszám].correctAnswer).style.background = "darkgreen";
        }

        document.getElementById("valasz1").style.pointerEvents = 'none';
        document.getElementById("valasz2").style.pointerEvents = 'none';
        document.getElementById("valasz3").style.pointerEvents = 'none';
    }

    document.getElementById("valasz3").onclick = () => {

        if (kérdések[kérdésSorszám].correctAnswer == 3) {
            document.getElementById("valasz3").style.background = "darkgreen";
        }
        else {
            document.getElementById("valasz3").style.background = "lightcoral";
            document.getElementById("valasz" + kérdések[kérdésSorszám].correctAnswer).style.background = "darkgreen";
        }

        document.getElementById("valasz1").style.pointerEvents = 'none';
        document.getElementById("valasz2").style.pointerEvents = 'none';
        document.getElementById("valasz3").style.pointerEvents = 'none';
    }
}
