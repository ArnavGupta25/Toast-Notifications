const styleSelect = document.getElementById('styleSelect');
const button = document.getElementById('button');
const toasts = document.getElementById('toasts');
let selectedStyle = styleSelect.value;

function reloadPage() {
  location.reload();
}

button.addEventListener('click', () => createNotification(null, selectedStyle));

styleSelect.addEventListener('change', () => {
  selectedStyle = styleSelect.value;
});

function createNotification(message = null, type = null) {
  const notif = document.createElement('div');
  notif.classList.add('toast');
  notif.style.backgroundColor = getNotificationColor(type);

  const fruitName = message ? message : getRandomMessage();
  const fruitImage = document.createElement('img');
  fruitImage.src = getFruitImage(fruitName);
  fruitImage.alt = fruitName;
  notif.appendChild(fruitImage);

  const fruitText = document.createElement('span');
  fruitText.innerText = fruitName;
  notif.appendChild(fruitText);

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 4000);
}

function getNotificationColor(type) {
  if (type === 'random') {
    return getRandomType();
  }
  return type ? type : selectedStyle;
}

function getRandomMessage() {
  const messages = [
    'apple',
    'mango',
    'banana',
    'pear',
    'guava',
    'watermelon',
    'melon',
    'lemon',
    'cherry',
    'strawberry',
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  const types = ['blue', 'green', 'red', 'purple', 'orange', 'pink'];
  return types[Math.floor(Math.random() * types.length)];
}

function getFruitImage(fruitName) {
  const imagePaths = {
    apple: 'images/apple.jpg',
    mango: 'images/mango.jpg',
    banana: 'images/banana.webp',
    pear: 'images/pear.avif',
    guava: 'images/guava.jpeg',
    watermelon: 'images/watermelon.jpeg',
    melon: 'images/melon.png',
    lemon: 'images/lemon.jpeg',
    cherry: 'images/cherry.jpg',
    strawberry: 'images/strawberry.jpg',
  };

  return imagePaths[fruitName] || 'default.png';
}
