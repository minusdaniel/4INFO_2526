let tot = 0
function add(){
    id = Date()

    let prodObj = document.getElementById("prodoo").value
    let quanObj = Number(document.getElementById("qty").value)
    let costObj = Number(document.getElementById("costo").value)
    
    if (prodObj == "" || quanObj == "" || costObj == "" || quanObj < 1) {
        alert("Compila tutti i campi correttamente!");
        return;
    }

    let tr = document.createElement("tr")
    let prodNameCell = document.createElement("td")
    let quanCell = document.createElement("td")
    let costCell = document.createElement("td")
    let totaCell = document.createElement("td")
    let rimuCell = document.createElement("td")
    let rimuButt = document.createElement("span")
    rimuButt.classList.add("material-icons")
    rimuButt.classList.add("icon-remove")
    rimuButt.classList.add("icon")
    tr.id = id


    rimuButt.innerHTML = "remove_shopping_cart"
    rimuCell.append(rimuButt)

    let quanNum = document.createElement("input")
    quanNum.type = 'number'
    quanNum.min = 1
    quanNum.value = quanObj
    quanNum.class
    quanCell.append(quanNum)

    rimuCell.append()

    prodNameCell.innerText= prodObj
    quanNum.value = quanObj
    costCell.innerText = costObj
    totaCell.innerText = costObj * quanObj
    tot = tot + (costObj * quanObj)
    let inizioadd = document.getElementById("inizio")
    tr.append(prodNameCell,quanCell,costCell,totaCell,rimuCell)
    inizioadd.parentNode.insertBefore(tr, inizioadd.nextSibling);

    rimuButt.addEventListener("click", function(){
        
    })
}
function sum(){
    document.getElementById("tot").innerText = tot+" €"
}
// function aggiornamento() {
//     let quantita = 0
//     let costo = 0

// }
// while (1==1) {
//     aggiornamento() <span class="material-icons icon-remove">remove_shopping_cart</span>
// }

