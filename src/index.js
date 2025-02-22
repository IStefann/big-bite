import "./style.css";
import { homeLoad } from "./main.js";
import { menuLoad } from "./menu.js";

const buttonHome = document.querySelector("#home");
const buttonMenu = document.querySelector("#menu");
const buttonContact = document.querySelector("#contact");
const contentDiv = document.querySelector("#content");

const buttons = document.querySelectorAll("nav>button");

buttons.forEach(button => {
    button.addEventListener("click", () =>{
        buttons.forEach(b => b.classList.remove("active"));
        removeChildren();
        button.classList.add("active");
        if(button.id === "home") homeLoad();
        if(button.id === "menu") menuLoad();
        if(button.id === "contact") console.log("temp");
    })
});

function removeChildren()
{
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
}

homeLoad();
