let madiv = document.querySelector(".madiv");

if (madiv.style.left !== "0px") {
    madiv.style.left = localStorage.getItem("left") + "px";
    madiv.style.top = localStorage.getItem("top") + "px";
}

document.addEventListener("keydown", function (e) {
    let left = madiv.offsetLeft;
    let top = madiv.offsetTop;
    if (e.key == "ArrowLeft") {
        left -= 10
        madiv.style.left = left + "px";
    } else if (e.key == "ArrowUp") {
        top -= 10
        madiv.style.top = top + "px";
    } else if (e.key == "ArrowRight") {
        left += 10;
        madiv.style.left = left + "px";
    } else if (e.key == "ArrowDown") {
        top += 10
        madiv.style.top = top + "px";
    }
    localStorage.setItem("left", left);
    localStorage.setItem("top", top);
})