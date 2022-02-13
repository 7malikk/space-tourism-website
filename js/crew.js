const img1 = document.querySelector('#imgOne');
const img2 = document.querySelector('#imgTwo');
const img3 = document.querySelector('#imgThree');
const img4 = document.querySelector('#imgFour');
const arrofImg = [img1, img2, img3, img4];
const userName = document.querySelector('#userName');
const bio = document.querySelector('#bio');
const dp = document.querySelector('#dp');
const role = document.querySelector('#role');

fetch('../js/json/data.json')
  .then((Response) => {
    return Response.json();
  })

  .then((data) => {
    const { crew } = data;

    arrofData = [role, bio, dp, userName];

    arrofImg.forEach((member, index) => {
      member.addEventListener('click', (e) => {
        userName.innerHTML = crew[index].name.toUpperCase();
        bio.innerHTML = crew[index].bio;
        role.innerHTML = crew[index].role.toUpperCase();
        dp.src = crew[index].images.png;
        e.preventDefault();
      });
    });
  });
