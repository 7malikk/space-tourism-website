const Link1 = document.querySelector('#Link1');
const Link2 = document.querySelector('#Link2');
const Link3 = document.querySelector('#Link3');
const arroflinks = [Link1, Link2, Link3];
const techName = document.querySelector('#techName');
const techInfo = document.querySelector('#techInfo');
const landscape = document.querySelector('#landscape');

fetch('../js/json/data.json')
  .then((Response) => {
    return Response.json();
  })

  .then((data) => {
    const { technology } = data;

    arroflinks.map((terms, index) => {
      terms.addEventListener('click', (e) => {
        techName.innerHTML = technology[index].name.toUpperCase();
        techInfo.innerHTML = technology[index].description;
        landscape.src = technology[index].images.landscape;
        e.preventDefault();
      });
    });
  });
