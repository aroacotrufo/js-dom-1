//recupera elemento tramite id

const button = document.getElementById("accensione");
console.log(button);

button.addEventListener("click", function(){
    console.log("cliccato");
})

/*
button.addEventListener("click", () => {            con arrow function
    console.log("cliccato");
}
*/