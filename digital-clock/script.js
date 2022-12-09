const showTime = () => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";
    let day = date.getDay();

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h -12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + " : " + m + " : " + s + " " + session;
    document.getElementById("clockDisplay").innerText = time;
    document.getElementById("clockDisplay").textContent = time;

    setTimeout(showTime, 1000);
}
showTime();


var ball = document.querySelector("#ball");

ball.addEventListener("click", changeTheme);

var leftside = false;
function changeTheme(){
    if (leftside == true) {
        ball.style.left = "32px";
        ball.style.backgroundColor = "#111";
        leftside = false;
        document.querySelector(".mode").style.backgroundColor = "grey";
        document.querySelector("body").style.backgroundColor = ("rgb(1, 7, 67)");
        document.getElementById("clockDisplay").style.color = ("white");
    } else {
        ball.style.left = "2.5px";
        ball.style.backgroundColor = "black";
        leftside = true;
        document.querySelector(".mode").style.backgroundColor = "#fff";
        document.querySelector("body").style.backgroundColor = ("#ccc");
        document.getElementById("clockDisplay").style.color = ("black");
    }
}