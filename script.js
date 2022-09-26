const game = document.querySelector('article');
const meter = document.querySelector('#life');
const feed = document.querySelector('#feed');
const btnTam = document.querySelector('#create');
const imgTam = document.querySelector('.image');

const arrImgs = ['/img/dino.png', '/img/cat.png', '/img/ghost.png', '/img/duck.png'];
let imgIndex = 0;

const interval = setInterval(function() {
  meter.value--;
  setMeter();
}, 50);


function setMeter() {
  if (meter.value === 0) {
    imgTam.src = '/img/end.png';
  }
}

feed.addEventListener('click', function() {
  if (meter.value !== 0) {
    meter.value +=20;
  }
});

btnTam.addEventListener('click', function() {
  game.hidden = false;
  meter.value = 100;
  if(imgIndex >= arrImgs.length) {
    imgIndex = 0;
  }
  imgTam.src = arrImgs[imgIndex];
  imgIndex++;
});