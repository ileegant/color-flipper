const hexColor = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

const changeBtn    = document.getElementById('changeBtn');
const currentColor = document.getElementById('currentColor');

changeBtn.addEventListener('click', () => {
  const randColor = getRandomColor();
  const textColor = getTextColor(randColor);
  document.body.style.backgroundColor = randColor;
  document.body.style.color = textColor;
  changeBtn.style.color = textColor;
  changeBtn.style.borderColor = textColor;
  currentColor.textContent = randColor;
});

function getRandomColor() {
  let color = '#'
  for (i = 0; i < 6; i++) {
    const randColor = Math.floor(Math.random() * hexColor.length)
    color += hexColor[randColor];
  };
  return color;
};

function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return { r, g, b }
}

function isDarkColor(r, g, b) {
  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  return brightness < 128
}

function getTextColor(hex) {
  const rgb = hexToRgb(hex);
  return isDarkColor(rgb.r, rgb.g, rgb.b) ? "#fff" : "#000"
}
