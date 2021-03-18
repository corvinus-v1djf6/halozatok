/*function pascals(numRows) {
    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];
    let result = [];
    for (let row = 1; row <= numRows; row++) {
        let arr = [];
        for (let col = 0; col < row; col++) {
            if (col === 0 || col === row - 1) {
                arr.push(1);
            } else {
                arr.push((result[row - 2][col - 1] + result[row - 2][col]));
            }
        }
        result.push(arr);
    }
    return result;
}*/

var faktoriális = function (n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
}
console.log(faktoriális(2))

var faktoriálisR = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * faktoriálisR(n - 1)
    }
}

let hova = document.getElementById("ide");
hova.innerHTML = ""

for (var s = 0; s < 10; s++) {

    let sor = document.createElement("div");
    hova.appendChild(sor);
    sor.classList.add("egymas_mellet")

    for (var o = 0; o < 10; o++) {
        if (s < o) {

        }
        else {
            let szam = document.createElement("button")
            sor.appendChild(szam)
            szam.innerText = (faktoriális(s) / (faktoriális(o) * (faktoriális(s - o))));
            szam.classList.add("doboz")
            szam.style.color = `rgb(${255 / 10 * s},0,${255 / 10 * o})`
            //console.log(255 / 10 * s);
            console.log(o, s)
        }
        }
    //(faktoriális(s) / (faktoriális(o) * (faktoriális(s - o))));
}