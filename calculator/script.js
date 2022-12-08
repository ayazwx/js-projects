var numbers = document.querySelectorAll("#number");
var value = document.querySelector("#value");
var options = document.querySelectorAll("#option");
var smallValue = document.querySelector('#smallValue');
var optState = false;
var opt = "";
var result = 0;

numbers.forEach(number => {
    number.addEventListener('click',showNumber);
    

    function showNumber(){
        if(value.textContent == "0" || optState)(
            value.textContent = ""
        );

        value.textContent += this.textContent;
        optState = false;
    }
})

options.forEach(operator => {
    operator.addEventListener('click', calculate);

    function calculate(){
        optState = true;
        var newOpt = this.textContent;
        smallValue.textContent = value.textContent;

        switch(opt){
            case "+": 
                result = Number(smallValue) + Number(value.textContent);
                break;

            case "-": 
                result = Number(smallValue) - Number(value.textContent);
                break;

            case "*": 
                result = Number(smallValue) * Number(value.textContent);
                break;

            case "/": 
                result = Number(smallValue) / Number(value.textContent);
                break;

            case "=":
                Number(value.textContent) = result;
                break;
            case "AC":
                value.textContent = "0";
                smallValue.textContent = "0";
                break;
        }
        Number(smallValue) = Number(value.textContent);
        opt = newOpt;
    }
})


var ball = document.querySelector("#ball");

ball.addEventListener("click", changeTheme);

var leftside = true;
function changeTheme(){
    if (leftside == true) {
        ball.style.left = "35px";
        ball.style.backgroundColor = "#111";
        leftside = false;
        document.querySelector(".mode").style.backgroundColor = "#fff";
        document.querySelector("body").style.backgroundColor = ("#111");
        document.querySelector("#calculator").style.backgroundColor = "grey";
        document.querySelector("table").style.backgroundColor = ("grey");
        document.querySelector.All("#number").style.backgroundColor = ("white");
    } else {
        ball.style.left = "5px";
        ball.style.backgroundColor = "#fff";
        leftside = true;
        document.querySelector(".mode").style.backgroundColor = "#111";
        document.querySelector("body").style.backgroundColor = ("#ccc");
        document.querySelector("#calculator").style.backgroundColor = "white";
        document.querySelector("table").style.backgroundColor = ("white");
        document.querySelector.All("td").style.color = ("black");
    }
}