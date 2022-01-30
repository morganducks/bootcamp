var connectionRequests = 2;
var connections = 500;
var anyName = "Any Name";

function addLike() {
    console.log("clicked");
    connectionRequests -= 1;
    connections += 1;
    document.getElementById("disappear").remove();
    document.getElementById("connectionRequestNumber").innerHTML = connectionRequests;
    document.getElementById("connectionNumber").innerHTML = connections;
}

function addNoLike() {
    console.log("clicked");
    connectionRequests -= 1;
    document.getElementById("disappear").remove();
    document.getElementById("connectionRequestNumber").innerHTML = connectionRequests;
    document.getElementById("connectionNumber").innerHTML = connections;
}


function addLike1() {
    console.log("clicked");
    connectionRequests -= 1;
    connections += 1;
    document.getElementById("disappear2").remove();
    document.getElementById("connectionRequestNumber").innerHTML = connectionRequests;
    document.getElementById("connectionNumber").innerHTML = connections;
}

function addNoLike1() {
    console.log("clicked");
    connectionRequests -= 1;
    document.getElementById("disappear2").remove();
    document.getElementById("connectionRequestNumber").innerHTML = connectionRequests;
    document.getElementById("connectionNumber").innerHTML = connections;
}

function changeName() {
    document.getElementById("userName").innerHTML = anyName;
}

