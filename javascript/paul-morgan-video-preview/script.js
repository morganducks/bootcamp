console.log("page loaded...");

var springScene = document.getElementById("videoPreview");

function startPreview(element) {
    console.log("hovered")
    springScene.play();
}

function stopPreview(element) {
    springScene.pause();
}

