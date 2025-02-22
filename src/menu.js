import doubleDeck from "./doubleDeck.png"
import chickenBite from "./chickenBite.png"
import bacon from "./bacon.png"
import wrap from "./wrap.png";
import shwarma from "./shwarma.png";

function menuLoad() {
    const content = document.querySelector("#content");
    const background = document.querySelector(".background");
   
    if(background.className !== "blur")
    background.classList.add("blur");

    const arrowLeft = document.createElement("div");
    const arrowRight = document.createElement("div");
    arrowLeft.innerHTML = "&lt;";
    arrowRight.innerHTML = "&gt;";
    arrowLeft.classList.add("arrow", "left");
    arrowRight.classList.add("arrow", "right");
    arrowLeft.dataset.carouselButton = "prev";
    arrowRight.dataset.carouselButton = "next";

    content.classList.add("center");
    content.appendChild(arrowLeft);
    content.appendChild(arrowRight);

    const list = document.createElement("ul");
    list.classList.add("container");
    list.setAttribute("data-slides", "");

    for (let i = 0; i < 5; i++) {
        const li = document.createElement("li");
        li.classList.add("slide");
        list.appendChild(li);

        const img = document.createElement("img");
        li.appendChild(img);

        const card = document.createElement("div");
        card.classList.add("card");
        li.appendChild(card);

        const header = document.createElement("div");
        header.classList.add("bolder");
        card.appendChild(header);

        const underHeader = document.createElement("div");
        underHeader.classList.add("lighter");
        card.appendChild(underHeader);

        const price = document.createElement("p");
        price.classList.add("bolder");
        card.appendChild(price);
    }
    content.appendChild(list);

    const foodList = [...list.children];
    foodList[0].setAttribute('data-active', 'true');
    foodList[0].querySelector("img").src = doubleDeck;
    foodList[0].querySelector("img").alt = "Double Decker Burger";
    foodList[0].querySelector(".bolder").textContent = "The Double Decker";
    foodList[0].querySelector(".lighter").textContent = "Burger featuring two juicy beef patties, melted cheese, fresh lettuce, pickles, and a tangy sauce, all sandwiched between a soft, toasted bun.";
    foodList[0].querySelector("p").textContent = "7.99$";

    foodList[1].querySelector("img").src = chickenBite;
    foodList[1].querySelector("img").alt = "Chicken Bite Burger";
    foodList[1].querySelector(".bolder").textContent = "Chicken Bite";
    foodList[1].querySelector(".lighter").textContent = "A delicious fried chicken burger featuring a crispy, golden fried chicken patty, crunchy pickles, fresh lettuce, and tangy mayo, all in a soft bun.";
    foodList[1].querySelector("p").textContent = "5.99$";

    foodList[2].querySelector("img").src = bacon;
    foodList[2].querySelector("img").alt = "Bacon DELUXE Burger";
    foodList[2].querySelector(".bolder").textContent = "Bacon DELUXE Burger";
    foodList[2].querySelector(".lighter").textContent = "A tasty burger featuring a juicy beef patty, crispy bacon, fresh lettuce, and creamy mayo, all in a soft bun.";
    foodList[2].querySelector("p").textContent = "8.99$";

    foodList[3].querySelector("img").src = wrap;
    foodList[3].querySelector("img").alt = "Wrap it Up";
    foodList[3].querySelector(".bolder").textContent = "Wrap it Up";
    foodList[3].querySelector(".lighter").textContent = "This wrap includes grilled chicken, crisp lettuce, fresh tomatoes, and a light dressing, wrapped in a soft tortilla.";
    foodList[3].querySelector("p").textContent = "5.50$";

    foodList[4].querySelector("img").src = shwarma;
    foodList[4].querySelector("img").alt = "Chicken Plate";
    foodList[4].querySelector(".bolder").textContent = "Sizzling Chicken Plate";
    foodList[4].querySelector(".lighter").textContent = "Pieces of chicken served with onions, crunchy pickles, and fresh tomatoes, all on a sizzling plate.";
    foodList[4].querySelector("p").textContent = "8.99$";

    const buttons = document.querySelectorAll(".arrow");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.dataset.carouselButton === 'next' ? 1 : -1;
            const slides = document.querySelector("[data-slides]");

            const activeSlide = slides.querySelector('[data-active]');
            let newIndex = [...slides.children].indexOf(activeSlide) + value;
            if (newIndex < 0) newIndex = slides.children.length - 1;
            if (newIndex > slides.children.length - 1) newIndex = 0;

            slides.children[newIndex].dataset.active = true;
            delete activeSlide.dataset.active;
        });
    });
}
export { menuLoad };