const canvas = document.querySelector("#aCanvas");

//canvas.width = Math.min("1200", window.innerWidth);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const sizeX = 150;
const sizeY = 150;
let rngNum = 1;

let image = new Image();
image.src = `https://source.unsplash.com/random/${sizeX}x${sizeY}/?sig=${rngNum}`;

const ctx = canvas.getContext("2d");

const handleMouseMove = (event) => {
  if (event.pageY < canvas.height - (sizeY / 2)) {
    ctx.drawImage(image, event.pageX - sizeX / 2, event.pageY - sizeY / 2, sizeX, sizeY);
    writeText();
  }
};

async function handleMouseClick(event) {
  let newImage = new Image();
  rngNum = getRandomInt(2, 1000);
  newImage.src = `https://source.unsplash.com/random/${sizeX}x${sizeY}/?sig=${rngNum}`;
  await newImage.decode();
  image = newImage;
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

writeText();

canvas.addEventListener("mousemove", handleMouseMove);
canvas.addEventListener("click", handleMouseClick);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}