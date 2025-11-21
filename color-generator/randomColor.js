let colorCard = document.querySelector("#color-generator");

let colorRgb = document.querySelector("#rgb-code");

let generateBtn = document.querySelector("#generate-button");


generateBtn.addEventListener("click" , function () {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    colorRgb.innerHTML = `rgb(${red},${green},${blue})` ;
colorCard.style.backgroundColor = `rgb(${red},${green},${blue})`;
});