let tot=0
let i = 0
function add()
{
    let inizioadd = document.getElementById("fine")
    let dipartimentoObj = document.getElementById("dipartimento").value
    let cognomeObj = document.getElementById("cognome").value
    let nomeObj = document.getElementById("nome").value
    let meseObj = document.getElementById("mese").value
    let importoObj = document.getElementById("importo").value
    let id = new Date()
    if (dipartimentoObj == "" || cognomeObj == "" || nomeObj == "" || meseObj == "" || importoObj == "") {
        alert("inserire qualcosa in tutti i campi")
    }
    else{
        importoObj = Number(importoObj)
        tot+=importoObj;

        let row = document.createElement("tr")
        let tdDipartimento = document.createElement("td")
        let tdCognome = document.createElement("td")
        let tdNome = document.createElement("td")
        let tdMese = document.createElement("td")
        let tdImporto = document.createElement("td")
        tdDipartimento.innerText = dipartimentoObj
        tdCognome.innerText = cognomeObj
        tdNome.innerText = nomeObj
        tdMese.innerText = meseObj
        tdImporto.innerText = importoObj
        row.id = id
        row.append(tdDipartimento,tdCognome,tdNome,tdMese,tdImporto)
        inizioadd.parentNode.insertBefore(row, inizioadd.nextSibling);
        document.getElementById("dipartimento").value = ""
        document.getElementById("cognome").value = ""
        document.getElementById("nome").value = ""
        document.getElementById("mese").value =  ""
        document.getElementById("importo").value = ""
        i++
    }
}
function sum () {
    if (i == 1 || i == 0){ // OwO nn mi metta 2 grazie
        alert("elementi insufficenti")
    }
    else{
        document.getElementById("tot").innerText = tot+" €"
    }
}
function avg() {
    let media = tot / i
    let str = media.toString();
    console.log(str.substring(0, str.indexOf(".")+3));
    if (i == 1 || i == 0){ // OwO nn mi metta 2 grazie
        alert("elementi insufficenti")
    }
    else{
        document.getElementById("media").innerText = str +" €"
    }
    
}