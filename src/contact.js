function loadContact(){
const content = document.querySelector("#content");
const background = document.querySelector(".background");
   
if(background.className !== "blur")
background.classList.add("blur");

const container = document.createElement("div");
const cardDiv = document.createElement("div");
const title = document.createElement("div");
const iframe = document.createElement("iframe");
const location = document.createElement("div");
const number = document.createElement("div");

container.classList.add("container");
cardDiv.classList.add("cardContact");
title.classList.add("contactTitle");
title.textContent = "Come visit us!";
location.classList.add("bolder");
location.textContent = "📍 450 Fremont St #130, Las Vegas, NV 89101, United States";
number.classList.add("lighter");
number.textContent = "☎️ +1 702-706-7568";
iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4172.8855523909515!2d-115.14332632349215!3d36.16946230299904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c3755b686f5d%3A0x3fefeeb2f20591b9!2sHeart%20Attack%20Grill!5e1!3m2!1sen!2srs!4v1740265745616!5m2!1sen!2srs";
iframe.width = "600";
iframe.height = "450";
iframe.style.border = "0";
iframe.allowFullscreen = "";
iframe.loading = "lazy";
iframe.referrerPolicy = "no-referrer-when-downgrade";

content.appendChild(container);
container.appendChild(cardDiv);
cardDiv.appendChild(title);
cardDiv.appendChild(iframe);
cardDiv.appendChild(location);
cardDiv.appendChild(number);
}

export {loadContact};