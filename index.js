const generatePasswords = document.querySelector('.generate-pwrd-button')
const clearAllFields = document.querySelector('.clear-all-fields-button')
const copiedText = document.querySelector('.copied-text')
const alphabet = String.fromCharCode(...Array(123).keys()).slice(33)  // create an array with 123 items starting from index 33 in the ASCII code

let allBoxes = document.querySelectorAll('.box')

generatePasswords.addEventListener('click', generateRandomPasswords)
clearAllFields.addEventListener('click', clearFields)
allBoxes.forEach(item => {item.addEventListener('click', copyToClipboard)})


function generateRandomPasswords() {
  let result = ''
  let arrayOfPasswords = []
  const lengthOfPassword = 15

  for (let i = 0; i < 4; i++) {
    result = ''

    for (let j = 0; j < lengthOfPassword; j++) {
      result += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
    }
    arrayOfPasswords.push(result)
  }

  for (let k = 0; k < allBoxes.length; k++) {
    allBoxes[k].textContent = arrayOfPasswords[k]
  }
}


function copyToClipboard() {
  let getText;
  id = this.id
  getText = allBoxes[id - 1].textContent

  if (getText !== '') {
    navigator.clipboard.writeText(getText)
    notifyUser()
  } else {
    return
  }
 }

 
 function notifyUser() {
  copiedText.classList.add('done')
  let temp = setInterval( () => {
    copiedText.classList.remove('done')
    clearInterval(temp)
  }, 1000)
 }


 function clearFields() {
  allBoxes.forEach(item => {
    item.textContent = ''
  })
}
