import { passwordBoxesMainEl } from './index.js';

const notificationText = document.getElementById('notification-text');

passwordBoxesMainEl.addEventListener('click', copyToClipboard);

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