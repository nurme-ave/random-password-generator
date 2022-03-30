const generatePasswords = document.querySelector('.generate-pwrd-button');
const clearAllFields = document.querySelector('.clear-all-fields-button');
const notificationText = document.querySelector('.notification-text');
const chars = String.fromCharCode(...Array(123).keys()).slice(33); // create a string with 123 items starting from index 33 in the ASCII code

let allBoxes = document.querySelectorAll('.box');

generatePasswords.addEventListener('click', displayPasswords);
clearAllFields.addEventListener('click', clearFields);
allBoxes.forEach((item) => {
  item.addEventListener('click', copyToClipboard);
});

function displayPasswords() {
  const getPwrds = generateRandomPasswords();

  for (let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].textContent = getPwrds[i];
  }
}

function generateRandomPasswords() {
  let password = '';
  let arrayOfPasswords = [];
  const lengthOfPassword = 15;

  for (let i = 0; i < 4; i++) {
    password = '';

    for (let j = 0; j < lengthOfPassword; j++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    arrayOfPasswords.push(password);
  }
  return arrayOfPasswords;
}

function copyToClipboard() {
  let getText;
  id = this.id;
  getText = allBoxes[id - 1].textContent;

  if (getText) {
    navigator.clipboard.writeText(getText);
    notifyUser();
  }
}

function notifyUser() {
  notificationText.classList.add('copied');
  let temp = setInterval(() => {
    notificationText.classList.remove('copied');
    clearInterval(temp);
  }, 1000);
}

function clearFields() {
  allBoxes.forEach((item) => {
    item.textContent = '';
  });
}
