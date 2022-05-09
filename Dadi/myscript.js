// Variabili
var numeriDado = ["1", "2", "3", "4", "5", "6"];
const clickButton = document.getElementById("myButton");
const myOutput = document.querySelector(".number");
const pcOutput = document.querySelector(".numberPC");

// Scelgo un numero casuale tra gli elementi dell'array
const random = Math.floor(Math.random() * numeriDado.length);

// Il PC sceglie un numero casuale tra gli elementi dell'array
const randomPC = Math.floor(Math.random() * numeriDado.length);
console.log(numeriDado[random]);

// Stampo in pagina il mio numero
clickButton.addEventListener("click",
    function(){
        myOutput.innerHTML = numeriDado[random];
    }
);

// Stampo in pagina il numero del PC
clickButton.addEventListener("click",
    function(){
        pcOutput.innerHTML = numeriDado[randomPC];
    }
);
