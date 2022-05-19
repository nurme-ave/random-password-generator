import { userInput, instructionsText, numberOfPwrdBoxes, allPasswordBoxes } from './index.js';

const chars = String.fromCharCode(...Array(123).keys()).slice(33);

document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
});

document.querySelector('.generate-pwrd-button').addEventListener('click', displayPasswords);

function displayPasswords() {
  const lengthOfPassword = +userInput.value;
  const isValidated =
    userInput.value >= 10 && userInput.value <= 20 ? true : false;

  if (isValidated) {
    const randomPasswords = generatePasswords(lengthOfPassword);
    fillPasswordBoxes(randomPasswords);
  } else {
    instructionsText.style.color = 'red';
  }
}

function generatePasswords(userPasswordLength) {
  let password = '';
  let arrayOfPasswords = [];

  for (let i = 0; i < userPasswordLength * numberOfPwrdBoxes; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
    if (password.length === userPasswordLength) {
      arrayOfPasswords.push(password);
      password = '';
    }
  }
  return arrayOfPasswords;
}

function fillPasswordBoxes(generatedPasswords) {
  for (let i = 0; i < allPasswordBoxes.length; i++) {
    allPasswordBoxes[i].textContent = generatedPasswords[i];
  }
}
