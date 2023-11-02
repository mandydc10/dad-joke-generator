const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');
const jokeButtonSpan = jokeButton.querySelector('.jokeText')
const loader = document.querySelector('.loader');

const buttonText = [
  '..Ugh',
  // '🤦🏻‍♂️',
  'omg dad',
  'you are the worst',
  'seriously',
  'stop it',
  'please stop',
  'that was the worst one',
  'just no'
];

async function fetchJoke() {
  // turn on loader
  loader.classList.remove('hidden');
  jokeButton.classList.add('hidden');
  const response = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  })
  const data = await response.json();
  // turn off loader
  loader.classList.add('hidden');
  jokeButton.classList.remove('hidden');
  return data
}

function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === not) {
    console.log('Ahh we used that one last time, look again');
    console.log(not);
    return randomItemFromArray(arr, not);
  }
  return item;
}

async function handleClick() {
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke;
  jokeButtonSpan.textContent = randomItemFromArray(
    buttonText,
    jokeButtonSpan.textContent
  );
}

jokeButton.addEventListener('click', handleClick)