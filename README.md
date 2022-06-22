# Random Password Generator

This is a personal project built by [Ave Nurme](https://www.avenurme.dev).

## Table of contents

- [Overview](#overview)
  - [Project Description](#project-description)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
- [Author](#author)

## Overview

### Project Description

If you are too lazy to come up with good passwords then this is just the right app for you! :)

Here I also decided to take the modular JavaScript approach and splitted the code into 3 separate files.

If the user enters a number which is less than 10 or more than 20 the instructions text right to the user input will turn red, notifying the user that their input is not valid, and no passwords are generated.

I'm utilizing String.fromCharCode() and Math.random() here to create the passwords. String.fromCharCode() combined with (...Array.keys()) and slice() generates an array of letters, numbers and symbols from the ASCII code. This enables you to create a whole array of characters with just one line of code.

Once the passwords are generated the user can utilize 1-click-copy and a hovering 'Copied!' text will appear on the screen after doing so.

The page has been built with mobile-first design in mind and is fully responsive.

### Screenshot

![Screenshot of my solution](/images/random-password-generator_760.png)

### Links

- Live Site URL: [GitHub Pages](https://nurme-ave.github.io/scrimba-solo-project-random-password-generator/)

### Built with

- HTML, CSS, JavaScript

## Author

- Website - [Ave Nurme](https://www.avenurme.dev)
- Twitter - [@ave\_nurme](https://twitter.com/ave_nurme) - Follow me doing my 3rd round of the 100DaysOfCode challenge!
- Linkedin - [Ave Nurme](https://www.linkedin.com/in/ave-nurme)
- YouTube - [Ave Nurme](https://www.youtube.com/channel/UC_kKIEE66Wa5bAxjqoI1A8w/videos)
- Github - [@nurme-ave](https://github.com/nurme-ave)
- Frontend Mentor - [@nurme-ave](https://www.frontendmentor.io/profile/nurme-ave)
