const imageWidth = 200;
const imageHeight = 150;
let imgNum = 5;

const canvas = document.querySelector("#aCanvas");
//canvas.width = Math.min("1200", window.innerWidth);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

let image = new Image();
image.src = `https://source.unsplash.com/random/${imageWidth}x${imageHeight}/?sig=${imgNum}`;

writeText();

canvas.addEventListener("mousemove", handleMouseMove);
canvas.addEventListener("click", handleMouseClick);

function handleMouseMove(event) {
  if (event.pageY < canvas.height - (imageHeight / 2)) {
    ctx.drawImage(image, event.pageX - imageWidth / 2, event.pageY - imageHeight / 2, imageWidth, imageHeight);
    writeText();
  }
};

async function handleMouseClick(event) {
  let newImage = new Image();
  imgNum++;
  newImage.src = `https://source.unsplash.com/random/${imageWidth}x${imageHeight}/?sig=${imgNum}`;
  await newImage.decode();
  image = newImage;
};

function writeText() {
  ctx.fillStyle = 'orange';
  ctx.strokeStyle = 'black';
  ctx.font = '100px serif';
  ctx.fillText('Hello world', 10, 100);
  ctx.strokeText('Hello world', 10, 100);
  ctx.fillText('Hello world', canvas.width - 500, canvas.height - 40);
  ctx.strokeText('Hello world', canvas.width - 500, canvas.height - 40);
};


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}