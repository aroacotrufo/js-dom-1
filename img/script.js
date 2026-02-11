const button = document.getElementById ("bottone")      //riprendo gli elementi che voglio utilizzare
const img = document.getElementById("spenta")           

button.addEventListener('click',                        //quando clicco
    function (){
       // console.log('Acceso')
        if(img.src.includes('white')){                  //controlla che l'attributo src dell'img contiene la parola white
            img.src = "./yellow_lamp.png"               //se sì, cambia la sorgente dell'immagine con l'altra (gialla)
            button.innerHTML ="Spegni"                  //cambia il testo all'interno del bottone
        }else{                                          //altrimenti, se non contiene il bianco, quindi è giallo
            //bonus      
            img.src='./white_lamp.png'                  //cambia l'immagine in bianco(si spegne)
            button.innerHTML = "Accendi"                //cambia il testo in accendi
        }
    }
)