/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function (l1, l2) {
  return l1 * l2;
};

console.log(area(2, 4));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (num1, num2) {
  let result = 0;
  if (typeof num1 === "number" && typeof num2 === "number" && !isNaN(num1) && !isNaN(num2)) {
    result = num1 === num2 ? (num1 + num2) * 3 : num1 + num2;
  } else {
    console.log("Inserire un riferimento numerico valido");
  }
  return result;
};

console.log(crazySum(12, 7));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (num1) {
  const num2 = 19;
  return num1 > num2 ? [num1 - num2, (num1 - num2) * 3] : Math.abs(num1 - num2);
};

console.log(crazyDiff(17));
console.log(crazyDiff(22));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (n) {
  return (n > 20 && n <= 100) || n === 400;
};

console.log(boundary(35));
console.log(boundary(107));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (string1) {
  const epicode = "epicode";
  if (typeof string1 === "string") {
    return string1.startsWith(epicode.toUpperCase()) ? string1 : epicode.toUpperCase().concat(string1);
  } else {
    console.log("Inserire un valore valido di stringa");
  }
};

console.log(epify("proof"));
console.log(epify("EPICODE123"));
console.log(epify(12));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (num1) {
  if (typeof num1 === "number" && !isNaN(num1) && num1 > 0) {
    return num1 % 3 === 0 || num1 % 7 === 0;
  } else {
    console.log("Inserisci un numero valido");
  }
};

console.log(check3and7(35));
console.log(check3and7(13));
console.log(check3and7("not a number"));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function (string1) {
  let reversedString = "";
  if (typeof string1 === "string") {
    for (let i = string1.length - 1; i >= 0; i--) {
      reversedString += string1[i];
    }
  } else {
    console.log("not a string");
  }
  return reversedString;
};

console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = function (string1) {
  if (typeof string1 === "string") {
    let capitalString = string1.split(" ");
    for (let i = 0; i < capitalString.length; i++) {
      capitalString[i] = capitalString[i][0].toUpperCase() + capitalString[i].slice(1);
    }
    return capitalString.join(" ");
  } else {
    console.log("not a string");
  }
};

console.log(upperFirst("epicode for developer"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function (string1) {
  if (typeof string1 === "string") {
    let slicedString = string1.slice(1, string1.length - 1);
    return slicedString;
  } else {
    console.log("not a string");
  }
};

console.log(cutString("EPICODE"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (n) {
  if (typeof n === "number" && !isNaN(n)) {
    let randomNumbers = [];
    for (let i = 0; i < n; i++) {
      randomNumbers.push(Math.floor(Math.random() * 10));
    }
    return randomNumbers;
  }
};

console.log(giveMeRandom(7));
