let car = document.querySelector(".car");
let htmlLogo = document.querySelector(".htmllogo");
let headingHtml = document.querySelector(".heding1");
let innerText = document.querySelector(".innertext1");


document.onkeydown = ((e) => {
    console.log("hii", e.code);
    if (e.code == "ArrowRight") {
        console.log("helow");
        car.style.left = "-17px"
    } if (car.style.left = "-17px") {
        htmlLogo.classList.remove("none");
        headingHtml.classList.remove("none");
        innerText.classList.remove("none");
    }
});
