const input = document.querySelector(".input");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const smallerCase = "abcdefghijklmnopqrstuvwxyz";
const symbol = "!@#$%^&*()+_-{}[]?/~|";
const number = "0123456789";

const allChar = upperCase + smallerCase + symbol + number;

function generate(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += smallerCase[Math.floor(Math.random() * smallerCase.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    password += number[Math.floor(Math.random() * number.length)];

    while(password.length < 12){
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }

    input.value = password;
}

function copy(){
    input.select();
    document.execCommand("copy");
}

