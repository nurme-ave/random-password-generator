const generatePasswords = document.querySelector('.generate-pwrd-button')
const clearAllFields = document.querySelector('.clear-all-fields')
const copiedHoverText = document.querySelector('.copied-hover-text')
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
    allBoxes[k].innerText = arrayOfPasswords[k]
  }
}


function copyToClipboard() {
  copiedHoverText.classList.remove('active')
  let getText;
  id = this.id
  copiedHoverText.classList.add('active')
  getText = allBoxes[id - 1].textContent
  navigator.clipboard.writeText(getText)
  alert(`Box ${id}: password --->     ${getText}     <--- copied to clipboard!`)
 };


 function clearFields() {
  allBoxes.forEach(item => {
    item.innerText = ''
  })
}
