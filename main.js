document.addEventListener('DOMContentLoaded', (e) => {
  fetch('https://official-joke-api.appspot.com/jokes/random')
    .then((data) => data.json())
    .then((data) => {
      const newJoke = document.createElement('p');
      newJoke.setAttribute('id', 'new-joke');
      newJoke.innerText = data.setup;
      jokePlace.append(newJoke);

      const newPunchline = document.createElement('p');
      newPunchline.setAttribute('id', 'new-joke');
      newPunchline.innerText = data.punchline;

      setTimeout(() => jokePlace.appendChild(newPunchline), 5000);

      button.addEventListener('click', (e) => {
        fetch('https://official-joke-api.appspot.com/jokes/random')
          .then((data) => data.json())
          .then((data) => {
            newJoke.innerText = data.setup;
            newPunchline.innerText = '';

            setTimeout(() => (newPunchline.innerText = data.punchline), 5000);
          });
      });
      // });
    });

  // const randomJoke = document.getElementById("random-joke");
  const jokePlace = document.getElementById('joke-place');

  let button = document.querySelector('button');

  // async function fetchData() {
  //   const result = await fetch('https://official-joke-api.appspot.com/jokes/random');
  //   const joke = await result.json();
  //   const newJoke = document.createElement('p');
  //   newJoke.setAttribute('id', 'new-joke');
  //   newJoke.innerText = joke.setup;
  //   jokePlace.append(newJoke);

  //   setTimeout(() => {
  //     const newPunchline = document.createElement('p');
  //     newPunchline.setAttribute('id', 'new-joke');
  //     newPunchline.innerText = joke.punchline;
  //     jokePlace.append(newPunchline);
  //   }, 5000);
  //   console.log(joke);
  // }
  // fetchData();
});
