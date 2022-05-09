// Variabili
var numeriDado = ["1", "2", "3", "4", "5", "6"];
const clickButton = document.getElementById("myButton");
const myOutput = document.querySelector(".number");

// Scelgo un numero casuale tra gli elementi dell'array
const random = Math.floor(Math.random() * numeriDado.length);
console.log(numeriDado[random]);

// Stampo in pagina
clickButton.addEventListener("click",
    function(){
        console.log("clicked");
        myOutput.innerHTML = numeriDado[random];
    }
);
