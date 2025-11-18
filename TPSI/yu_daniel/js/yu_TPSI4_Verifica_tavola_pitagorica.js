function genera(){//funzione per generare il codice

    id = Date()
    let numcolonne = document.getElementById("colonne").value
    numcolonne = Math.floor(numcolonne)//arrotondo ad un numero intero
    let tabella = document.getElementById("pitagorica")
    //controllo se il numero è valido
    if (numcolonne < 13 && numcolonne > 2 ){
        // ciclo per il numero di colonne per creare le righe
        for (let index = 1; index < numcolonne+1; index++) {
            let colonna = document.createElement("tr")
            tabella.append(colonna)
            //ciclo per le celle e aggiungerle alle righe e darle un testo
            for (let jndex = 1; jndex < numcolonne+1; jndex++) {
                let cella = document.createElement("td")
                testo = index*jndex
                cella.append(testo)
                cella.id=testo
                colonna.append(cella)
                //aggiungere la classe alla prima colonna
                if (jndex==1) {
                    cella.classList.add("header")   
                }
            }
        }
    }
    else{
        alert("errore numero inserito non valido -1")
    }
        // per dare la classe al primo elemento ovvero la prima riga di 
        let cella2 = document.getElementById("2")
        let cella3 = document.getElementById("3")
        let cella4 = document.getElementById("4")
        let cella5 = document.getElementById("5")

        cella2.classList.add("header")
        cella3.classList.add("header")
        cella4.classList.add("header")
        cella5.classList.add("header")

        let cella6 = document.getElementById("6")
        let cella7 = document.getElementById("7")
        let cella8 = document.getElementById("8")
        let cella9 = document.getElementById("9")

        cella6.classList.add("header")
        cella7.classList.add("header")
        cella8.classList.add("header")
        cella9.classList.add("header")
}
//funzione multipli
function multipli(){
    input = document.getElementById("num1").value
    //controllo se numero valido
    if (input>0) {
        alert("funziona penso")
    }
    else{
        alert("errore numero inserito non valido -2")
    }
}
//funzione divisori
function divisori() {
    input = document.getElementById("num1").value
    //controllo se numero valido
    if (input>0) {
        alert("funziona penso")
    }
    else{
        alert("errore numero inserito non valido -3")
    }
}