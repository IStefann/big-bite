function homeLoad()
{
    const contentDiv = document.querySelector("#content");
    const background = document.querySelector(".background");
   
    background.classList.remove("blur");

    const mainDiv = document.createElement("div");
    const title = document.createElement("h1");
    const belowTitle = document.createElement("p");
    const belowTitle2 = document.createElement("p");

    mainDiv.classList.add("mainTxt");

    title.textContent = "BIG BITE";
    belowTitle.textContent = "Best burgers in town";
    belowTitle2.innerHTML = 'since <span style="font-size: 2rem;">1997.</span></p>'
    contentDiv.appendChild(mainDiv);
    mainDiv.appendChild(title);
    mainDiv.appendChild(belowTitle);
    mainDiv.appendChild(belowTitle2);
}

export {homeLoad}