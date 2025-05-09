##  Email List

### consegna
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

**Bonus**
- Abbellire con CSS o Bootstrap
- Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
- Far sì che le email vengono stampati solo quando arrivano tutti i 10 email

---

#### Raccolta Dati
- API https://flynn.boolean.careers/exercises/api/random/mail
- 10 indirizzi email


---

#### Esecuzione Logica

1) Includo all'interno del codice html prima dello script il cdn Axis;
2) all'interno dello script scrivo:
axios
.get(https://flynn.boolean.careers/exercises/api/random/mail)
.then((funzione di callback) => {
    console.log(funzione di callback)
});
3) All'interno del body nel html creo una ul e inserisco l'id "random-email" dove poi stampo le email generate;
---
4) nello script:
- prelevo gli elementi dal DOM con document.getelementbyid;
- utilizzo un ciclo for dove i <= 10 così che le mail generate siano 10 come da consegna;
- con axios.get richiedo la email generata casualmente;
- con .then e la funzione di callback ricevo la risposta;
- con document.createElement("li"): creo un nuovo elemento lista;
- con appendChild(): aggiungo la nuova email alla lista nel DOM.