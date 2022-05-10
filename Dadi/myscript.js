// Variabili
// var numeriDado = [1, 2, 3, 4, 5, 6];
const clickButton = document.getElementById("myButton");
const myOutput = document.querySelector(".number");
const pcOutput = document.querySelector(".numberPC");
const esitoFinale = document.querySelector(".esito");


// Scelgo un numero casuale tra gli elementi dell'array
const random = Math.floor(Math.random() * 6) + 1;

// Il PC sceglie un numero casuale tra gli elementi dell'array
const randomPC = Math.floor(Math.random() * 6) + 1;
// console.log(numeriDado[random]);

// Al click escono i risultati
clickButton.addEventListener("click",
    function(){
        // Stampo del mio numero
        myOutput.innerHTML = "Numero dado giocatore: " + random;

        // Stampo numero del PC
        pcOutput.innerHTML = "Numero dado PC: " + randomPC;
        
        // Stampo dell'esito
        if(random > randomPC) {
            console.log("Hai vinto");
            esitoFinale.innerHTML = "Hai vinto!";          
        } else if(random == randomPC) {
            console.log("Pareggio");
            esitoFinale.innerHTML = "Pareggio!";
        } else {
            console.log("Hai perso");
            esitoFinale.innerHTML = "Hai perso!";
        }
    }
);




