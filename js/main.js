"use strict";

// Funzioni

// Funzione che genera 5 numeri random unici
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

// Funzione che mostra a schermo la lista dei 5 numeri random
function mostraNumeri(listaNumeri) {
  const containerCelle = document.querySelector(".container");
  for (let i = 0; i < listaNumeri.length; i++) {
    const cella = document.createElement("div");
    cella.classList.add("cella");
    cella.innerText = listaNumeri[i];
    containerCelle.append(cella);
  }
}

// function nascondiNumeri(listaNumeri){
//     const containerCelle = document.querySelector('.container');
//     containerCelle.innerHTML = '';

//     const numeriIndovinati = inserimentoNumeri(listaNumeri);
//     containerCelle.innerText = numeriIndovinati;
// }

// Funzione che permette all'utente di inserire 5 numeri se il numeri sono presenti in quelli generati
// li aggiunge ai numeri indovinati
function inserimentoNumeri(listaNumeri) {
  const numeriIndivinati = [];
  let i = 0;
  while (i < 5) {
    const numeroUtente = Number(prompt(`Inserisci il numero ${i + 1}: `));
    if (!isNaN(numeroUtente)) {
      if (listaNumeri.includes(numeroUtente)) {
        numeriIndivinati.push(numeroUtente);
      }
      i++;
    }
  }
  return numeriIndivinati;
}

// Funzione che nasconde i numeri
function nascondiNumeri() {
  const containerNumeri = document.querySelector(".container");
  containerNumeri.innerHTML = "";
}

// Funzione che mostra a schermo un timer di 30 secondi
function timer(){
    const timer = document.querySelector(".timer");

    let conta = 30;
    const time = setInterval(function () {
      if (conta === 1) {
        timer.innerHTML = '';
        clearInterval(time);
      } else {
        conta--;
        timer.innerText = conta;
      }
    }, 1000);
}

// Main
const numeroMax = 100;
const numeroMin = 1;
const listaNumeri = numeriRandom(numeroMax, numeroMin);
console.log(listaNumeri);
mostraNumeri(listaNumeri);
timer();

// Funzione che nasconde i numeri dopo 30 secondi
setTimeout(nascondiNumeri, 30000);

// // Funzione che si attiva dopo la scomparsa dei numeri e che permette all'utente di inserire i numeri per indovinare
setTimeout(function () {
  const numeriIndovinati = inserimentoNumeri(listaNumeri);
  if(numeriIndovinati.length !== 0){
    mostraNumeri(numeriIndovinati);
  }else{
    const containerCelle = document.querySelector('.container');
    containerCelle.innerText = `Hai indovinato ${numeriIndovinati.length} numeri`;
  }
}, 31000);
