"use strict";

// Funzioni

function numeriRandom(max, min) {
  let listaNumeri = [];
  while (listaNumeri.length < 5) {
    const numero = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!listaNumeri.includes(numero)) {
      listaNumeri.push(numero);
    }
  }
  return listaNumeri;
}

function mostraNumeri(listaNumeri) {
  const containerCelle = document.querySelector(".container");
  containerCelle.innerText = listaNumeri;
}

// function nascondiNumeri(listaNumeri){
//     const containerCelle = document.querySelector('.container');
//     containerCelle.innerHTML = '';

//     const numeriIndovinati = inserimentoNumeri(listaNumeri);
//     containerCelle.innerText = numeriIndovinati;
// }


// function inserimentoNumeri(listaNumeri){
//     const numeriIndivinati = [];
//     let i = 0;
//     while(i < 5){
//         const numeroUtente = Number(prompt(`Inserisci il numero ${i+1}: `));
//         if(!isNaN(numeroUtente)){
//             if(listaNumeri.includes(numeroUtente)){
//                 numeriIndivinati.push(numeroUtente);
//             }
//             i++;
//         }
//     }
//     return numeriIndivinati;
// }

// Main
const numeroMax = 100;
const numeroMin = 1;
const listaNumeri = numeriRandom(numeroMax, numeroMin);
console.log(listaNumeri);
mostraNumeri(listaNumeri);

// setTimeout(function(){
//     nascondiNumeri(listaNumeri);
// }, 30000);
