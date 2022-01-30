var likesNum = 0;
var likesNum2 = 0;
var likesNum3 = 0;

function addLike() {
    console.log("click");
    likesNum += 1;
    document.getElementById("likes").innerHTML = likesNum;
}

function addLike2() {
    console.log("click");
    likesNum2 += 1;
    document.getElementById("likes2").innerHTML = likesNum2;
}

function addLike3() {
    console.log("click");
    likesNum3 += 1;
    document.getElementById("likes3").innerHTML = likesNum3;
}