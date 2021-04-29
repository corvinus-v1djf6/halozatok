var kérdések;
var kérdésSorszám = 0;

var jóVálasz;
var questionId = 4;

var kérdésekSzáma = 859;

var hotList = [];           //Az éppen gyakoroltatott kérdések listája 
var questionsInHotList = 3; //Ez majd 7 lesz, teszteléshez jobb a 3. 
var displayedQuestion;      //A hotList-ből éppen ez a kérdés van kint
var numberOfQuestions;      //Kérdések száma a teljes adatbázisban
var nextQuestion = 1;       //A következő kérdés száma a teljes listában

var timeoutHandler;


function letöltés() {
    /*fetch('questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data));*/

    fetch('/questions/1')
        .then(response => response.json())
        .then(data => kérdésMegjelenítés(data));
}

function kérdésMegjelenítés(kérdés) {
    //let kérdések = hotList[displayedQuestion].question;
    console.log(kérdés);
    document.getElementById("kerdes_szoveg").innerText = kérdés.questionText
    document.getElementById("valasz1").innerText = kérdés.answer1
    document.getElementById("valasz2").innerText = kérdés.answer2
    document.getElementById("valasz3").innerText = kérdés.answer3

    jóVálasz = kérdés.correctAnswer;

    if (kérdés.image != "") {
        document.getElementById("kep1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
    }
    else {
        document.getElementById("kep1").src = "";
    }

    //Jó és rossz kérdések jelölésének levétele
    document.getElementById("valasz1").classList.remove("jó", "rossz");
    document.getElementById("valasz2").classList.remove("jó", "rossz");
    document.getElementById("valasz3").classList.remove("jó", "rossz");
}

function kérdésBetöltés(questionNumber, destination) {
    fetch(`/questions/${questionNumber}`)
        .then(
            result => {
                if (!result.ok) {
                    console.error(`Hibás letöltés: ${response.status}`)
                }
                else {
                    return result.json()
                }
            }
        )
        .then(
            q => {
                hotList[destination].question = q;
                hotList[destination].goodAnswers = 0;
                console.log(`A ${questionNumber}. kérdés letöltve a hot list ${destination}. helyére`)
                if (displayedQuestion == undefined && destination == 0) { //!!!!!!!!!!!!!
                    displayedQuestion = 0;
                    kérdésMegjelenítés();
                }
            }
        );
}

function init() {
    for (var i = 0; i < questionsInHotList; i++) {
        let q = {
            question: {},
            goodAnswers: 0
        }
        hotList[i] = q;
    }

    //Első kérdések letöltése
    for (var i = 0; i < questionsInHotList; i++) {
        kérdésBetöltés(nextQuestion, i);
        nextQuestion++;
    }
}

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d
    kérdésMegjelenítés(0);
}

function elore_time() {
    clearTimeout(timeoutHandler);
    displayedQuestion++;
    if (displayedQuestion == questionsInHotList) displayedQuestion = 0;
    kérdésMegjelenítés();
}

function választás(n) {
    if (n != jóVálasz) {
        console.log("rossz")
        document.getElementById(`valasz${n}`).classList.add("rossz");
        document.getElementById(`valasz${jóVálasz}`).classList.add("jó");
        hotList[destination].goodAnswers = 0;
    }
    else {
        console.log("jó")
        document.getElementById(`valasz${jóVálasz}`).classList.add("jó");
        hotList[destination].goodAnswers++;
    }

    document.getElementById("valasz1").style.pointerEvents = 'none';
    document.getElementById("valasz2").style.pointerEvents = 'none';
    document.getElementById("valasz3").style.pointerEvents = 'none';

    timeoutHandler = setTimeout(elore_time, 3000);
}

window.onload = () => {

    letöltés();

    // timeoutHandler = setTimeout(elore_time, 3000);

    // kérdésBetöltés(kérdésSorszám);
    kérdésBetöltés(kérdésSorszám);
    init();
    


    document.getElementById("Vissza").onclick = () => {

        /*
        displayedQuestion--;
        if (displayedQuestion == questionsInHotList) displayedQuestion = 0;
        kérdésMegjelenítés()*/

        if (kérdésSorszám == 0) {
            kérdésSorszám = 859 - 1
            kérdésBetöltés(kérdésSorszám);
        }
        else {
            kérdésBetöltés(--kérdésSorszám);
        }

    }

    document.getElementById("Elore").onclick = () => {

    /*
    displayedQuestion++;
    if (displayedQuestion == questionsInHotList) displayedQuestion = 0;
    kérdésMegjelenítés()*/

        if (kérdésSorszám == 859 - 1) {
            kérdésSorszám = 0;
            kérdésBetöltés(kérdésSorszám);
        }
        else {
            kérdésBetöltés(++kérdésSorszám);
        }

    }



    /*document.getElementById("valasz1").onclick = () => {

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

    }*/

    /*document.getElementById("valasz2").onclick = () => {

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
    }*/

    /*document.getElementById("valasz3").onclick = () => {

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
    }*/
}
