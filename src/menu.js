import photo from "./background.jpg"

function carousel() {
    const leftArrow = document.querySelector("#left");
    const rightArrow = document.querySelector("#right");

    rightArrow.addEventListener("click", () => {
        document.querySelector("#img").src = photo;
    });
}

export {carousel};