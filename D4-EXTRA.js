// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
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

const randomNumbers = giveMeRandom(8);

const checkArray = function (randomArray) {
  let sumRandom = 0;
  for (let i = 0; i < randomArray.length; i++) {
    if (randomArray[i] > 5) {
      console.log(`Il numero ${randomArray[i]} è maggiore di 5`);
      sumRandom += randomArray[i];
    } else if (randomArray[i] < 5) {
      console.log(`Il numero ${randomArray[i]} è minore di 5`);
    } else {
      console.log(`Il numero ${randomArray[i]} è uguale 5`);
    }
  }
  return sumRandom;
};

console.log(checkArray(randomNumbers));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const shoppingCart = [
  {
    price: 30,
    name: "name1",
    id: "id1",
    quantity: 8,
  },
  {
    price: 20,
    name: "name2",
    id: "id2",
    quantity: 6,
  },
  {
    price: 17,
    name: "name3",
    id: "id3",
    quantity: 3,
  },
  {
    price: 43,
    name: "name4",
    id: "id4",
    quantity: 4,
  },
];

const shoppingCartTotal = function (shoppingCart) {
  let totalAmount = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    totalAmount += shoppingCart[i].price * shoppingCart[i].quantity;
  }
  return totalAmount;
};

console.log(shoppingCartTotal(shoppingCart));

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const shoppingObj = {
  price: 28,
  name: "name5",
  id: "id5",
  quantity: 7,
};

const addToShoppingCart = function (shoppingCart, shoppingObj) {
  let totalElement = 0;
  shoppingCart.push(shoppingObj);
  for (let i = 0; i < shoppingCart.length; i++) {
    totalElement += shoppingCart[i].quantity;
  }
  return totalElement;
};

console.log(addToShoppingCart(shoppingCart, shoppingObj));

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
