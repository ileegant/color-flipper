const hexColor = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

const changeBtn    = document.getElementById('changeBtn');
const currentColor = document.getElementById('currentColor');

changeBtn.addEventListener('click', () => {
  const randColor = getRandomColor();
  document.body.style.backgroundColor = randColor;
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

