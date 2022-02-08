        
        document.getElementById("button").onclick = () => setBackgroundColorById("paragraph", "blue");

        document.getElementById("alert").onclick = () => alert(document.getElementById("popup-input").value);

        document.getElementById("hover-this").onmouseover = () => setBackgroundColorById("body", "red");

        document.getElementById("hover-this").onmouseout = () => setBackgroundColorById("body", "white");

        (id) => document.getElementById(id).value;

        (id, color) => document.getElementById(id).style = "background-color: " + color;

        mouseOverFunction = (el) => el.style = "background-color: black";

        //why can't I console.log these?