const moon = document.querySelector('#moon');
const mars = document.querySelector('#mars');
const europa = document.querySelector('#europa');
const titan = document.querySelector('#titan');

const arrOfDestinations = [moon, mars, europa, titan];

const head = document.querySelector('#header');
const body = document.querySelector('#body');
const img = document.querySelector('#img');

const footer1 = document.querySelector('#footer1');
const footer2 = document.querySelector('#footer2');

fetch('../js/json/data.json')
  .then((Response) => {
    return Response.json();
  })

  .then((data) => {
    const { destinations } = data;

    arrOfDestinations.map((destination, index) => {
      destination.addEventListener('click', (e) => {
        head.innerHTML = destinations[index].name.toUpperCase();
        body.innerHTML = destinations[index].description;
        footer1.innerHTML = destinations[index].distance.toUpperCase();
        footer2.innerHTML = destinations[index].travel.toUpperCase();
        img.src = destinations[index].images.png;

        e.preventDefault();
      });
    });
  });
