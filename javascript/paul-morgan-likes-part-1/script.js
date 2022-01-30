var likesNum = 0;

function addLike() {
    console.log("click");
    likesNum += 1;
    document.getElementById("likes").innerHTML = likesNum;
}