
function rimuovi(){
    butrimuovi.closest(tr).remove()
}



function salva() {
    let cognome = document.getElementById("cognome").value
    let nome = document.getElementById("nome").value
    let indirizzo = document.getElementById("indirizzo").value
    let telefono = document.getElementById("telefono").value

    console.log("cognome:",cognome)
    console.log("nome:",nome)
    console.log("indirizzo:",indirizzo)
    console.log("telefono:",telefono)
    if (cognome != "" && nome != "" && indirizzo != "" && telefono != ""){
        const tr = document.createElement("tr")
        const tdnome = document.createElement("td")
        const tdcognome = document.createElement("td")
        const tdindirizzo = document.createElement("td")
        const tdtelefono = document.createElement("td")
        const tdrimuovi = document.createElement("td")
        const butrimuovi = document.createElement("button")
        butrimuovi.addEventListener(click,rimuovi)
        const tabella = document.getElementById("tabella")
        butrimuovi.innerText = "rimuovi"
        tdnome.innerText = nome
        tdcognome.innerText = cognome
        tdindirizzo.innerText = indirizzo
        tdtelefono.innerText = telefono
        tdrimuovi.colSpan = "2"
        tabella.append(tr)
        tr.append(tdnome)
        tr.append(tdcognome)
        tr.append(tdindirizzo)
        tr.append(tdtelefono)
        tr.append(tdrimuovi)
        tdrimuovi.append(butrimuovi)



        document.getElementById("cognome").value = ""
        document.getElementById("nome").value = ""
        document.getElementById("indirizzo").value = ""
        document.getElementById("telefono").value = ""

    }
    else{
        alert("erroreee")
    }
}


