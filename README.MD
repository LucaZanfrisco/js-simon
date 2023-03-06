# Consegna

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.

Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

---

# Svolgimento

- Crea un funzione che genera 5 numeri randomici
- Aggiungere i 5 numeri ad un array
- Stampare nel DOM l'array appena creato
- Crea una funzione con timeout dic 30 secondi
- All'interno della funzione timeout nascondere il contenuto del DOM 
- Far appare 5 prompt dove l'utente dovra inserire dei numeri
- Controllare se il numero inserito sia prensente nell'array di numeri inseriti
- Se è presente aggiungerlo ad un array di numeri indovinati
- Mostra quanti e quali numeri sono stati indovinati
