// Chiedere all’utente di inserire una parola 
// Creare una funzione per capire se la parola inserita è palindroma

let parola = prompt('Inserisci una parola per verificare se è palidroma');
console.log('La parola da verificare è ' + parola)

let parola_invertita = parola_palindroma(parola);

if (parola == parola_invertita) {
    console.log('La parola è palidroma');
    alert('La parola è palidroma');
    
}else{
    console.log('La parola non è palidroma')
    alert('La parola non è palidroma');
}


function parola_palindroma(parola_da_scrivere) {
    let parola_invertita = '';

    let i = parola_da_scrivere.length - 1;

    while (i >= 0) {
        parola_invertita += parola_da_scrivere[i];
        i--;
    }
    return parola_invertita;
}







// METODO SENZA FUNZIONE CON .split .reverse .join

// let parola = prompt('Inserisci una parola per verificare se è palidroma');

// const lettere = parola.split('');
// console.log(lettere);

// const lettere_invertite = lettere.reverse();
// console.log(lettere_invertite);

// const lettere_invertite_unite = lettere_invertite.join('');
// console.log(lettere_invertite_unite);


// if (parola == lettere_invertite_unite) {
//     alert('La parola è palidroma');
//     console.log('La parola è palidroma');
// }else{
//     console.log('La parola non è palidroma')
//     alert('La parola non è palidroma');
// }