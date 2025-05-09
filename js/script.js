// Prelevo elemento dal DOM //
const emailList = document.getElementById("random-email");

// Ciclo for per generare 10 email casuali //
for (let i = 1; i <= 10; i++) {
    axios
        // richiedo la mail generata random //
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
       // faccio funzione di callback per ricevere la risposta //
      .then((response) => {
        const email = response.data.response;
        // creo un nuovo elemento lista //
        const listItem = document.createElement("li");
        listItem.textContent = email;
        // utilizzo appendChild per aggiungere la email generata alla lista nel DOM //
        emailList.appendChild(listItem);
      })
      console.log(emailList);
      
};