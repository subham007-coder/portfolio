let car = document.querySelector(".car");

document.onkeydown = ((e) => {
    console.log("hii", e.code);
    if (e.code == "ArrowRight") {
        console.log("helow");
        car.style.left = "-17px"
    }
});
