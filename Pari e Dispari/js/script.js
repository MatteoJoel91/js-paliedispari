// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri 
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
// Dichiariamo chi ha vinto.


let domanda_pari_dispari = prompt('Preferisci pari o dispari?');
let domanda_numero = parseInt(prompt('Inserire un numero da 1 a 5'));
let risultato_somma;
let risultato_pari_dispari;

while (! (domanda_pari_dispari == `pari` || domanda_pari_dispari == `dispari`)) {
    domanda_pari_dispari = prompt('Preferisci pari o dispari?');
}

while (domanda_numero < 1 || domanda_numero > 5) {
    domanda_numero = prompt('Il numero inserito non è valido, inserire un numero da 1 a 5');
}


console.log('Il numero da te inserito è ' + domanda_numero);

// genero un numero random da 1 a 5 per il computer
numero_computer = numero_random(1,5);
console.log('Il numero random generato per il computer è ' + numero_computer);

// faccio la somma del numero inserito + il numero random del computer
risultato_somma = somma(numero_computer, domanda_numero);
console.log('La somma dei numeri è ' + risultato_somma);

// controllo se la somma dei numeri e pari o dispari
let risultato_finale = pari_dispari(risultato_somma);

// stampo il risultato finale dichiarando il vincitore
if(risultato_finale === domanda_pari_dispari){
    console.log(`Ha vinto l'utente con il numero ` + risultato_somma + ` che risulta ` + risultato_finale);
}else{
    console.log(`Il pc ha vinto con il numero ` + risultato_somma + ` che risulta ` + risultato_finale );
}


// funzione pari o dispari
function pari_dispari(numero_da_verificare) {
    let risultato;
    if (numero_da_verificare % 2 == 0) {
        risultato = 'pari';
    }else{
        risultato = 'dispari';
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