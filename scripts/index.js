const passwordBoxesMainEl = document.getElementById('password-boxes');
const userInput = document.getElementById('user-input');
const instructionsText = document.getElementById('instructions-text');

document.getElementById('clear-all-fields-button').addEventListener('click', clearFields);

// Create password boxes dynamically
const numberOfPwrdBoxes = 4;
for (let i = 0; i < numberOfPwrdBoxes; i++) {
  let button = document.createElement('button');
  button.classList.add('box');
  button.innerHTML = `<i class="fa-solid fa-ellipsis three-dots-icon"></i>`;
  passwordBoxesMainEl.appendChild(button);
}

const allPasswordBoxes = document.querySelectorAll('.box');

userInput.addEventListener('click', () => {
  if (instructionsText.style.color === 'red') {
    instructionsText.style.color = '#fff338';
  }
});

function clearFields() {
  allPasswordBoxes.forEach((item) => {
    item.innerHTML = '<i class="fa-solid fa-ellipsis three-dots-icon"></i>';
  });
  userInput.value = '';
}

export { passwordBoxesMainEl, userInput, instructionsText, numberOfPwrdBoxes, allPasswordBoxes };