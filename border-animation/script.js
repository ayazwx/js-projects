var ball = document.querySelector("#ball");

ball.addEventListener("click", changeTheme);

var leftside = false;
function changeTheme(){
    if (leftside == true) {
        ball.style.left = "32px";
        ball.style.backgroundColor = "#111";
        leftside = false;
        document.querySelector(".mode").style.backgroundColor = "grey";
        document.querySelector("body").style.backgroundColor = ("#111845");
        document.getElementById("background-img").style.borderColor = ("#2a3cad");
        document.getElementById("background-img").style.background = ("url('assets/among_trees_night_dribbble.png')");
        document.getElementById("box").style.background = ("#111845a6");
    } else {
        ball.style.left = "2.5px";
        ball.style.backgroundColor = "black";
        leftside = true;
        document.querySelector(".mode").style.backgroundColor = "#fff";
        document.querySelector("body").style.backgroundColor = ("bisque");
        document.getElementById("background-img").style.borderColor = ("rgb(255, 195, 122)");
        document.getElementById("background-img").style.background = ("url('assets/among-trees.png')");
        document.getElementById("background-img").style.backgroundRepeat = ("no-repeat");
        document.getElementById("background-img").style.backgroundSize = ("cover");
    }
}