let htmlLogo = document.querySelector(".htmllogo");
let headingHtml = document.querySelector(".heding1");
let innerText = document.querySelector(".innertext1");


// gsap.to(".car", {
//     x: 120,
//     duration: 1
// });

document.onkeydown = ((e) => {
    console.log("hii", e.keyCode);
    if (e.keyCode == 39) {
        let car = document.querySelector(".car");
        let carX = parseInt(window.getComputedStyle(car, null).getPropertyValue('left'));
        car.style.left = carX + 112+"px";
        htmlLogo.classList.remove("none");
        headingHtml.classList.remove("none");
        innerText.classList.remove("none");
    }
});
