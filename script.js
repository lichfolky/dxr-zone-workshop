const canvas = document.querySelector("#aCanvas");

canvas.width = Math.min("1200", window.innerWidth);
canvas.height = window.innerHeight;

const sizeX = 100;
const sizeY = 100;
let imageOdd = new Image();
imageOdd.src = "https://source.unsplash.com/random/150x150";
let imageEven = new Image();
imageEven.src = "https://source.unsplash.com/random/140x140";
let image = imageOdd;
let odd = false;

const ctx = canvas.getContext("2d");
const handleMouseMove = (event) => {
  if (event.pageY < canvas.height - (sizeY / 2)) {
    console.log(event.pageY, canvas.height - (sizeY / 2));
    ctx.drawImage(image, event.pageX - sizeX / 2, event.pageY - sizeY / 2, sizeX, sizeY);
    writeText();
  }
};

const handleMouseClick = (event) => {
  if (odd) {
    image = imageOdd;
  } else {
    image = imageEven;
  }
  odd = !odd;
  ctx.drawImage(image, event.pageX - sizeX / 2, event.pageY - sizeY / 2, sizeX, sizeY);
  writeText();
};

const writeText = () => {
  ctx.fillStyle = 'orange';
  ctx.strokeStyle = 'black';
  ctx.font = '100px serif';
  ctx.fillText('Hello world', 10, 100);
  ctx.strokeText('Hello world', 10, 100);
  ctx.fillText('Hello world', canvas.width - 500, canvas.height - 40);
  ctx.strokeText('Hello world', canvas.width - 500, canvas.height - 40);
};

canvas.addEventListener("mousemove", handleMouseMove);
canvas.addEventListener("click", handleMouseClick);


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}