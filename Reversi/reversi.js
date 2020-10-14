
document.addEventListener('click',createGame());

function createGame(){
    var grilledonnee = document.getElementById('tab');

    for (let i = 0; i < 8; i++) {
        let tr = document.createElement("tr");

        for (let j = 0; j < 8; j++) {
            let td = document.createElement("td");
            let div = document.createElement("div");
            div.className = "carre";
            if ((i===3 || i===4) && (j===3 || j===4 )) {
                let div2 = document.createElement("div");
                div2.className = "cercle";
                div.appendChild(div2);
            }
            td.appendChild(div);
            tr.appendChild(td);
        }
        grilledonnee.appendChild(tr);
    }
}

