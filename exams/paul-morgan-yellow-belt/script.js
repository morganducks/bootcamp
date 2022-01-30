function hide(element) {
    element.remove();
}

function petChoiceAlert(value) {
    alert(value);
}

function petOneCounter() {
    petOne += 1;
    document.getElementById("petPickLikesOne").innerHTML = petOne;
}

function petTwoCounter() {
    petTwo += 1;
    document.getElementById("petPickLikesTwo").innerHTML = petTwo;
}

function petThreeCounter() {
    petThree += 1;
    document.getElementById("petPickLikesThree").innerHTML = petThree;
}

var petOne = 0;
var petTwo = 0;
var petThree = 0;