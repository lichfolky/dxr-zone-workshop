const canvas = document.querySelector("#aCanvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const image = document.createElement("img");
image.src = "https://source.unsplash.com/random";


let sizeX = 20;
let sizeY = 40

const context = canvas.getContext("2d");
const handleMouseMove = (event) => {
  context.drawImage(image, event.clientX, event.clientY, sizeX , sizeY);
};

const handleMouseClick = (event) => {
 sizeX = sizeX * 2;
 sizeY = sizeY * 2;
};

canvas.addEventListener("mousemove", handleMouseMove);
canvas.addEventListener("click", handleMouseClick);
