// Variabili
var listaEmail = ["marco@gmail.com", "luca@gmail.com", "pippo@gmail.com"];
const myEmail = document.querySelector("input");
const myOutput = document.getElementById("my-output");
const myButton = document.getElementById("my-button");

// Al click del bottone mi dice se posso entrare
myButton.addEventListener("click",
    function(){
        for(let i = 0; i < listaEmail.length; i++){
            if(myEmail.value === listaEmail[i]){
                // Posso entrare
                console.log("Puoi entrare");
                myOutput.innerHTML = "Puoi Entrare!"
            } else {
                // Non posso entrare
                console.log("Non puoi entrare");
                myOutput.innerHTML = "Non puoi Entrare!"
            }
        }
    }
);

