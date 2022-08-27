const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  const randomNumber = getRandomNumber();
  const randomColor = colors[randomNumber];
  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
});

const getRandomNumber = () => Math.floor(Math.random() * colors.length);
