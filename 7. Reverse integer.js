/*
Solucion ingenierro de google

let reverse = function (x) {
    let negative = x < 0;
    let reversed = 0;

    if (negative) {
        x *= -1;
    }

    while (x > 0) {
        reversed = (reversed * 10) + (x % 10);
        x = Math.floor(x / 10);
    }

    if (reversed > (2 ** 31 - 1)) {
        return 0;
    }
    let printR = negative ? (reversed * -1) : reversed;
    console.log(printR);
    return printR;
};
 */

//MI SOLUCION

var reverse = function (x) {
    //si solo es de una cifra la retorna directamente
    if (x < 10 && -10 < x) {
        console.log(x);
    }

    //NEGATIVO / POSITIVO

    //variables comunes a positivos y negativos
    let xtring = x.toString();
    let arrX = Array.from(xtring);
    let rev = "";

    if (x < 0) {
        Math.abs(x);
        arrX.shift();
        for (let i = arrX.length - 1; i >= 0; i--) {
            let lastPos = arrX[i];
            rev = rev.concat(lastPos);
        }
        rev = parseInt(rev) * -1;
        console.log(rev);
        return rev;
    } else {
        for (let i = arrX.length - 1; i >= 0; i--) {
            let lastPos = arrX[i];
            rev = rev.concat(lastPos);
        }
        rev = parseInt(rev);
        console.log(rev);
        return rev;
    }
};
reverse(-123434);
