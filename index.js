const formEl = document.querySelector('.form');
const generatePasswordsButton = document.querySelector('.generate-pwrd-button');
const clearAllFieldsButton = document.querySelector('.clear-all-fields-button');
const passwordBoxesMainEl = document.querySelector('.password-boxes');
const allPasswordBoxes = document.querySelectorAll('.box');
const userInput = document.getElementById('user-input');
const instructionsText = document.querySelector('.instructions-text')
const notificationText = document.querySelector('.notification-text');

const chars = String.fromCharCode(...Array(123).keys()).slice(33); // create a string with 123 items starting from index 33 in the ASCII code


generatePasswordsButton.addEventListener('click', generatePasswords);
clearAllFieldsButton.addEventListener('click', clearFields);
passwordBoxesMainEl.addEventListener('click', copyToClipboard);


// Prevent form submission on the 'ENTER' key
formEl.addEventListener('submit', (e) => {
  e.preventDefault();
});


/*
  Change the color of the text next to the user input 
  from the color 'red' back to 'white' after the user has 
  entered an invalid input and clicks the user input
  to enter a new value.
*/
userInput.addEventListener('click', () => {
  if (instructionsText.style.color === 'red') {
    instructionsText.style.color = 'white';
  }
});


// Display Passwords
function generatePasswords() {
  const lengthOfPassword = validateUserInput(+userInput.value);

  if (lengthOfPassword) {
    const randomPasswords = getRandomPasswords(lengthOfPassword);
    fillPasswordBoxes(randomPasswords)
  }
}


function validateUserInput(len) {
  if (len >= 10 && len <= 20) {
    return len;
  } 
  instructionsText.style.color = 'red';
}


function getRandomPasswords(num) {
  let password = '';
  let arrayOfPasswords = [];

  for (let i = 0; i < 4; i++) {
    password = '';

    for (let j = 0; j < num; j++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    arrayOfPasswords.push(password);
  }
  return arrayOfPasswords;
}


function fillPasswordBoxes(pwrds) {
  for (let i = 0; i < allPasswordBoxes.length; i++) {
    allPasswordBoxes[i].textContent = pwrds[i];
  }
}


// Copy To Clipboard
function copyToClipboard(e) {
  if (e.target.tagName === 'BUTTON') {
    const textToCopy = e.target.textContent;
    navigator.clipboard.writeText(textToCopy)
    .then( () => {
      notifyUser();
    })
    .catch(err => {
      alert('Something went wrong', err);
    });
  }
}


/*
  When the user clicks on the password box a special
  notification box appears to notify the user that
  the password has been copied.
  I'm using the setInterval() and clearInterval() methods
  here to automatically remove the class 'copied' from
  the notification text element. Otherwise, if we don't remove
  the class the notification text will only appear once.
*/
function notifyUser() {
  notificationText.classList.add('copied');
  let temp = setInterval( () => {
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
