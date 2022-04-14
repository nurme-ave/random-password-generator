const generatePasswordsButton = document.querySelector('.generate-pwrd-button');
const clearAllFieldsButton = document.querySelector('.clear-all-fields-button');
const passwordBoxesMainEl = document.querySelector('.password-boxes');
const allPasswordBoxes = document.querySelectorAll('.box');
const userInput = document.getElementById('user-input');
const instructionsText = document.querySelector('.instructions-text');
const notificationText = document.querySelector('.notification-text');

const chars = String.fromCharCode(...Array(123).keys()).slice(33); // create a string with 123 items starting from index 33 in the ASCII code

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

function generatePasswords(userPwLength) {
  let password = '';
  let arrayOfPasswords = [];
  let totalBoxes = allPasswordBoxes.length;

  for (let i = 0; i < userPwLength * totalBoxes; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
    if (password.length === userPwLength) {
      arrayOfPasswords.push(password);
      password = '';
    }
  }

  return arrayOfPasswords;
}

function fillPasswordBoxes(pwrds) {
  for (let i = 0; i < allPasswordBoxes.length; i++) {
    allPasswordBoxes[i].textContent = pwrds[i];
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
