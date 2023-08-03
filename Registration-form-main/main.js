const form = document.getElementById('registration-form');
const cardContainer = document.getElementById('card-container');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  createCard();
  form.reset();
});

function createCard() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const website = document.getElementById('website').value;
  const image = document.getElementById('image').value;
  /*const gender = document.getElementById('gender').value;*/


  const skills = getSelectedSkills();
  const genders = getSelectedgenders();

  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
      <div>
        <u><p class="same2">DESCRIPTION</p></u>
        <div class="as">
        <div class="main2">
          <span class="same3">Name: </span> 
          <span class="main2-value">${name}</span>
        </div>
        <div class="main2">
          <span class="same3">Gender: </span>
          <span class="main2-value">${genders.join(',')}</span>
        </div>
    
        <div class="main2">
          <span class="same3">Email: </span>
          <span class="main2-value">${email}</span>
        </div>
   
        <div class="main2">
          <span class="same3">Website: </span>
          <span class="main2-value">${website}</span>
        </div>
        <div class="main2">
          <span class="same3">Skils: </span>
          <span class="main2-value">${skills.join(', ')}</span>
        </div>
       
      </div>
      <u><p class="same4">IMAGE</p></u>
      <div class="main4">
          <span class="same4"></span>
          <img src="${image}" alt="Student Image" class="card-image a1">
        </div>
    `;

  cardContainer.appendChild(card);
}

function getSelectedSkills() {
  const skills = document.getElementsByName('skills');
  const selectedSkills = [];

  skills.forEach(skill => {
    if (skill.checked) {
      selectedSkills.push(skill.value);
    }
  });

  return selectedSkills;
}

function getSelectedgenders() {
  const genders = document.getElementsByName('gender');
  const selectedgenders = [];

  genders.forEach(gender => {
    if (gender.checked) {
      selectedgenders.push(gender.value);
    }
  });

  return selectedgenders;
}