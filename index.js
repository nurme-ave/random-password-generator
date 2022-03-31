const generatePasswordsButton = document.querySelector('.generate-pwrd-button');
const clearAllFieldsButton = document.querySelector('.clear-all-fields-button');
const userInput = document.getElementById('user-input');
const formEl = document.querySelector('.form');
const passwordBoxesEl = document.querySelector('.password-boxes');
const notificationText = document.querySelector('.notification-text');
const chars = String.fromCharCode(...Array(123).keys()).slice(33); // create a string with 123 items starting from index 33 in the ASCII code

let allPasswordBoxes = document.querySelectorAll('.box');


// Prevent form submission on the 'ENTER' key
formEl.addEventListener('submit', (e) => {
  e.preventDefault();
});


generatePasswordsButton.addEventListener('click', generatePasswords);
clearAllFieldsButton.addEventListener('click', clearFields);
passwordBoxesEl.addEventListener('click', copyPasswords);


// Display Passwords
function generatePasswords() {
  const lengthOfPassword = validateUserInput(+userInput.value);
  const pwrds = getRandomPasswords(lengthOfPassword);

  for (let i = 0; i < allPasswordBoxes.length; i++) {
    allPasswordBoxes[i].textContent = pwrds[i];
  }
}

function validateUserInput(ip) {
  if (ip >= 10 && ip <= 20) {
    return ip;
  }
}

// Is there a better way to generate passwords other than using nested for-loop?
function getRandomPasswords(len) {
  let password = '';
  let arrayOfPasswords = [];

  for (let i = 0; i < 4; i++) {
    password = '';

    for (let j = 0; j < len; j++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    arrayOfPasswords.push(password);
  }
  return arrayOfPasswords;
}


// Copy To Clipboard
function copyPasswords(e) {
  if (e.target.tagName === 'BUTTON') {
    copyToClipboard(e.target.textContent);
    notifyUser();
  }
}

function copyToClipboard(textToCopy) {
  console.log(textToCopy);
  if (textToCopy) {
    const result = navigator.clipboard.writeText(textToCopy);
    return result;
  }
}

function notifyUser() {
  notificationText.classList.add('copied');
  let temp = setInterval(() => {
    notificationText.classList.remove('copied');
    clearInterval(temp);
  }, 1000);
}


// Clear Password Fields
function clearFields() {
  allPasswordBoxes.forEach((item) => {
    item.innerHTML = '<i class="fa-solid fa-ellipsis three-dots-icon"></i>';
  });
}
