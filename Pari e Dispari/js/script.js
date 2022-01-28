// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri 
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
// Dichiariamo chi ha vinto.


let domanda_pari_dispari = prompt('Preferisci pari o dispari?');
let domanda_numero = parseInt(prompt('Inserire un numero da 1 a 5'));



while (domanda_numero < 1 || domanda_numero > 5) {
    domanda_numero = prompt('Il numero inserito non è valido, inserire un numero da 1 a 5');
}


let numero_computer = numero_random(1,5);




console.log(somma(numero_computer, domanda_numero));


console.log(pari_dispari(somma));




// funzione pari o dispari
function pari_dispari(numero_da_verificare) {
    if (numero_da_verificare % 2 == 0) {
        alert('Il numero è pari');
    }else{
        alert('Il numero è diapri');
    }
    return risultato;
}


// funzione somma
function somma(num1, num2) {
    let numeri_sommati = num1 + num2;
    return numeri_sommati;
}

// funzione numero random
function numero_random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}