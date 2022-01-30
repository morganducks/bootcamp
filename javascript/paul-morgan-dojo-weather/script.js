var cookieAgreement = document.querySelector(".cookieBox");

var cityName = document.querySelector(".city");

function userAccepts() {
    cookieAgreement.remove();
}

function burbankSelected() {
    alert("Loading weather report for Burbank");
    cityName.innerHTML = "Burbank";
}

function chicagoSelected() {
    alert("Loading weather report for Chicago")
    cityName.innerHTML = "Chicago";
}

function dallasSelected() {
    alert("Loading weather report for Dallas")
    cityName.innerHTML = "Dallas";
}

function changeTemp() {
    
}