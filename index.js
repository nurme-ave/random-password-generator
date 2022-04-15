const generatePasswordsButton = document.querySelector('.generate-pwrd-button');
const clearAllFieldsButton = document.querySelector('.clear-all-fields-button');
const passwordBoxesMainEl = document.querySelector('.password-boxes');
const userInput = document.getElementById('user-input');
const instructionsText = document.querySelector('.instructions-text');
const notificationText = document.querySelector('.notification-text');

// Create a string starting from index 33 in the ASCII code
const chars = String.fromCharCode(...Array(123).keys()).slice(33);

// Create password boxes dynamically
const numberOfPwrdBoxes = 4;
for (let i = 0; i < numberOfPwrdBoxes; i++) {
  let button = document.createElement('button');
  button.classList.add('box');
  button.innerHTML = `<i class="fa-solid fa-ellipsis three-dots-icon"></i>`;
  passwordBoxesMainEl.appendChild(button);
}

const allPasswordBoxes = document.querySelectorAll('.box');

// Event listeners
generatePasswordsButton.addEventListener('click', displayPasswords);
clearAllFieldsButton.addEventListener('click', clearFields);
passwordBoxesMainEl.addEventListener('click', copyToClipboard);

document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
});

userInput.addEventListener('click', () => {
  if (instructionsText.style.color === 'red') {
    instructionsText.style.color = 'white';
  }
});

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
      console.log(password);
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

function copyToClipboard(e) {
  if (e.target.tagName === 'BUTTON') {
    const textToCopy = e.target.textContent;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        notifyUser();
      })
      .catch((err) => {
        alert(err);
      });
  }
}

function notifyUser() {
  notificationText.classList.add('copied');
  setTimeout(() => {
    notificationText.classList.remove('copied');
  }, 1000);
}

function clearFields() {
  allPasswordBoxes.forEach((item) => {
    item.innerHTML = '<i class="fa-solid fa-ellipsis three-dots-icon"></i>';
  });
  userInput.value = '';
}
