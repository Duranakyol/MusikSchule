var idHome = document.getElementById("idHome");
var container = document.getElementById("container");
var leistungen = document.getElementById("leistungen");
var unserTeam = document.getElementById("unserTeam");

var iduberUns = document.getElementById("iduberUns");
var divUberUns = document.getElementById("divUberUns");

var idKontakt = document.getElementById("idKontakt");
var divKontakt = document.getElementById("divKontakt");

function home() {
    iduberUns.style.backgroundColor = "inherit";
    idKontakt.style.backgroundColor = "inherit";
    idHome.style.backgroundColor = "red";

    divUberUns.style.opacity = "0";
    divKontakt.style.opacity = "0";

    container.style.opacity = "100%";
    leistungen.style.opacity = "100%";
    unserTeam.style.opacity = "100%";
}

function uberUns() {
    idHome.style.backgroundColor = "inherit";
    idKontakt.style.backgroundColor = "inherit";
    iduberUns.style.backgroundColor = "red";

    container.style.opacity = "0%";
    leistungen.style.opacity = "0%";
    unserTeam.style.opacity = "0%";
    divKontakt.style.opacity = "0";

    divUberUns.style.opacity = "100%";
}

function kontakt() {
    idHome.style.backgroundColor = "inherit";
    iduberUns.style.backgroundColor = "inherit";
    idKontakt.style.backgroundColor = "red";

    container.style.opacity = "0%";
    leistungen.style.opacity = "0%";
    unserTeam.style.opacity = "0%";
    divUberUns.style.opacity = "0%";

    divKontakt.style.opacity = "100%";
}

var image = document.getElementById("image");
var schreibung = document.getElementById("schreibung");

aktuell = 0;

function prev() {
    aktuell++;
    if (aktuell == 1) {
        image.src = "music3.jpg";
        schreibung.innerHTML = "MUSIK IST DAS LEBEN!";
        schreibung.style.color = "white";
        schreibung.style.position = "absolute";
        schreibung.style.top = "30%";
        schreibung.style.left = "400px";

    } else if (aktuell == 2) {
        image.src = "music2.png";
        schreibung.innerHTML = "WIR MACHEN MUSIK";
        schreibung.style.color = "red";
        schreibung.style.position = "absolute";
        schreibung.style.top = "80%";
        schreibung.style.left = "400px";

    } else {
        image.src = "music1.jpg";
        schreibung.innerHTML = "HERZLICH WILLKOMMEN";
        schreibung.style.color = "red";
        schreibung.style.position = "absolute";
        schreibung.style.top = "50%";
        schreibung.style.left = "340px";

        aktuell = 0;
    }
}

function next() {
    aktuell++;
    if (aktuell == 1) {
        image.src = "music2.png";
        schreibung.innerHTML = "WIR MACHEN MUSIK";
        schreibung.style.color = "red";
        schreibung.style.position = "absolute";
        schreibung.style.top = "80%";
        schreibung.style.left = "400px";

    } else if (aktuell == 2) {
        image.src = "music3.jpg";
        schreibung.innerHTML = "MUSIK IST DAS LEBEN!";
        schreibung.style.color = "white";
        schreibung.style.position = "absolute";
        schreibung.style.top = "30%";
        schreibung.style.left = "400px";

    } else {
        image.src = "music1.jpg";
        schreibung.innerHTML = "HERZLICH WILLKOMMEN";
        schreibung.style.color = "red";
        schreibung.style.position = "absolute";
        schreibung.style.top = "50%";
        schreibung.style.left = "340px";

        aktuell = 0;
    }
}

var menu = document.getElementById("menu");
var search = document.getElementById("search");

function bars() {
    menu.style.opacity = "100%";
    menu.style.position = "absolute";
    menu.style.top = "100%";
    menu.style.display = "flex";
    menu.style.flexDirection = "column";
    menu.style.width = "100%";
    search.style.top = "100px";
}

function schicken() {

    alert("Ihre Nachricht wurde geschickt!");
}