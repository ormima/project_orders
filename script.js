const linka = document.getElementById("linka");
const linkailosc = linka.innerText;
const drut = document.getElementById("drut");
const drutilosc = drut.innerText;
const wtyki = document.getElementById("wtyki");
const wtykiilosc = wtyki.innerText;
const modul = document.getElementById("modul");
const modulilosc = modul.innerText;
const aktualizuj1 = document.getElementById("aktualizuj1");
const aktualizuj2 = document.getElementById("aktualizuj2");
const aktualizuj3 = document.getElementById("aktualizuj3");
const aktualizuj4 = document.getElementById("aktualizuj4");
const zamow1 = document.getElementById("zamow1");
const zamow2 = document.getElementById("zamow2");
const zamow3 = document.getElementById("zamow3");
const zamow4 = document.getElementById("zamow4");
let zamowienieid = 0;

setInterval(braki, 250)

function braki(){
    // console.log("test1");
    // linka
    if (linkailosc < 6 && linkailosc > 0){
        linka.style.backgroundColor = "yellow";
        // console.log("test2");
    } else if (linkailosc == 0){
        linka.style.backgroundColor = "red";
        // console.log("test3");
    }
    else{
        linka.style.backgroundColor = "honeydew";
        // console.log("test4");
    }
    // drut
    if (drutilosc < 6 && drutilosc > 0){
        drut.style.backgroundColor = "yellow";
    } else if (drutilosc == 0){
        drut.style.backgroundColor = "red";
    }
    else{
        drut.style.backgroundColor = "honeydew";
    }
    // wtyki
    if (wtykiilosc < 6 && wtykiilosc > 0){
        linka.style.backgroundColor = "yellow";
    } else if (wtykiilosc == 0){
        wtyki.style.backgroundColor = "red";
    }
    else{
        wtyki.style.backgroundColor = "honeydew";
    }
    // modul
    if (modulilosc < 6 && modulilosc > 0){
        modul.style.backgroundColor = "yellow";
    } else if (modulilosc == 0){
        modul.style.backgroundColor = "red";
    }
    else{
        modul.style.backgroundColor = "honeydew";
    }
}

aktualizuj1.addEventListener("click", () => {
    alert("Podaj nową wartość" + InputEvent);
})

aktualizuj2.addEventListener("click", () => {
    alert("Podaj nową wartość" + InputEvent);
})

aktualizuj3.addEventListener("click", () => {
    alert("Podaj nową wartość" + InputEvent);
})

aktualizuj4.addEventListener("click", () => {
    alert("Podaj nową wartość" + InputEvent);
})

zamow1.addEventListener("click", () => {
    zamowienieid = zamowienieid + 1;
    alert("Zamówienie nr: " + zamowienieid + " Produkt: Skrętka U/UTP drut.");
})
zamow2.addEventListener("click", () => {
    zamowienieid = zamowienieid + 1;
    alert("Zamówienie nr: " + zamowienieid + " Produkt: Skrętka U/UTP linka.");
})
zamow3.addEventListener("click", () => {
    zamowienieid = zamowienieid + 1;
    alert("Zamówienie nr: " + zamowienieid + " Produkt: Wtyki 8P8C.");
})
zamow4.addEventListener("click", () => {
    zamowienieid = zamowienieid + 1;
    alert("Zamówienie nr: " + zamowienieid + " Produkt: Moduły Keystone.");
})