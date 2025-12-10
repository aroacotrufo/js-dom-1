//recupera 
//elemento tramite id

// Refs DOM
const button = document.getElementById("accensione");
console.log(button);
const img = document.getElementById("white_lamp");
console.log(img);


/*
button.addEventListener("click", () => {            con arrow function
    console.log("cliccato");
}
*/

button.addEventListener("click", function(){
    /* console.log("cliccato");
    console.log(img.src); */

    // decisione acceso o spento
    if(img.src.includes('white')){
        // manipolare l'attributo src del tag img
        img.src = "./img 3/yellow_lamp.png"
        // aggiorna testo bottone
        button.innerHTML = "Spegni"
    } else {
        img.src = "./img 3/white_lamp.png"
        button.innerHTML = "Accendi"
    }

})


/* function modifyPhoto() {  
 var accensione = document.getElementById("accensione");  
 accensione.firstChild.nodeValue = "spegnimento";      
}  */ 

// add event listener to t  
/* var el = document.getElementById("t");   
el.addEventListener("click", modifyText, false);   */ 
