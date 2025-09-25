const container = document.body;
const button = document.getElementById('clickMeBtn');

const wordsOriginal = [
  "#fyp", "#WatchNow", "#part2", "LIVE NOW", "#TheHungerGames", "#Marvel",
  "#aethetic", "#water", "#storytime", "#Wedding", "#Couples", "#shorts",
  "#explore", "#news", "#Disneyworld", "#thrift", "#NYC", "#Adoptadog", "#tour"
];

const gifsOriginal = [
  "gifs/wfg.gif",
  "gifs/ga.gif",
  "gifs/geicoad.gif"
];

const imagesOriginal = [
  "images/sotr.jpg",
  "images/cv.jpg",
  "images/dwts.jpg",
  "images/pa.jpeg",
  "images/pp.jpeg",
  "images/pg.jpeg",
  "images/tl.jpeg"
];

let wordsPool = [];
let gifsPool = [];
let imagesPool = [];

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function getNextItem(type) {
  switch (type) {
    case 'word':
      if (wordsPool.length === 0) wordsPool = shuffle(wordsOriginal);
      return wordsPool.pop();
    case 'gif':
      if (gifsPool.length === 0) gifsPool = shuffle(gifsOriginal);
      return gifsPool.pop();
    case 'image':
      if (imagesPool.length === 0) imagesPool = shuffle(imagesOriginal);
      return imagesPool.pop();
  }
}

function randomPosition(maxWidth, maxHeight) {
  return {
    x: Math.random() * maxWidth,
    y: Math.random() * maxHeight
  };
}

button.addEventListener('click', () => {
  const maxX = window.innerWidth - button.offsetWidth;
  const maxY = window.innerHeight - button.offsetHeight;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  button.style.left = `${newX}px`;
  button.style.top = `${newY}px`;

  const typeIndex = Math.floor(Math.random() * 3); 
  const pos = randomPosition(window.innerWidth - 100, window.innerHeight - 100);

  if (typeIndex === 0) {
    const text = getNextItem('word');
    const word = document.createElement('div');
    word.textContent = text;
    word.style.position = 'fixed';
    word.style.left = `${pos.x}px`;
    word.style.top = `${pos.y}px`;
    word.style.color = 'white';
    word.style.fontWeight = 'bold';
    word.style.fontSize = '1.5rem';
    word.style.textShadow = '1px 1px 2px black';
    word.style.userSelect = 'none';
    word.style.pointerEvents = 'none';
    container.appendChild(word);
  } else if (typeIndex === 1) {
    const src = getNextItem('gif');
    const gif = document.createElement('img');
    gif.src = src;
    gif.style.position = 'fixed';
    gif.style.left = `${pos.x}px`;
    gif.style.top = `${pos.y}px`;
    gif.style.maxWidth = '80px';
    gif.style.maxHeight = '80px';
    gif.style.borderRadius = '6px';
    gif.style.pointerEvents = 'none';
    container.appendChild(gif);
  } else {
    const src = getNextItem('image');
    const img = document.createElement('img');
    img.src = src;
    img.style.position = 'fixed';
    img.style.left = `${pos.x}px`;
    img.style.top = `${pos.y}px`;
    img.style.maxWidth = '80px';
    img.style.maxHeight = '80px';
    img.style.borderRadius = '6px';
    img.style.pointerEvents = 'none';
    container.appendChild(img);
  }
});
