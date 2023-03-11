let login = document.querySelector('[login]');
let signUp = document.querySelector('[sign-up]');
let controls = document.querySelector('.controls');
let signUpForm = document.querySelector('.sign-up-form');
let logInForm = document.querySelector('.log-in-form');

/*Dark Mode*/
let darkMode = document.querySelector('#dark-mode');
darkMode.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

/*Full Name Control*/
let fullnameValidate = (fullName) => {
  let fullNameResult = document.querySelector('#full-name-control');
  let fullNameInput = document.querySelector('#full-name');

  /* 
    - Only String,
    - Starts With Uppercase(Name and Surname),
    - Space Between Name And Surname,
    - No Space Starting or Ending
  */
  let fullNameRegex = /^[A-Z][^\s]+( [A-Z][^\s]+)+$/;

  /*Full Name Control*/
  if (fullNameRegex.test(fullName)) {
    fullNameResult.innerText = 'Correct.';
    fullNameResult.style = `
    color: green;
    font-size: 1.4em;
    `;
    fullNameInput.style = `
    color: green;
    border-color: green;
    `;
  } else {
    fullNameResult.innerText = 'Invalid full name, try again!';
    fullNameResult.style = `
    color: red;
    font-size: 1.4em;
    `;
    fullNameInput.style = `
    color: red;
    border-color: red;
    `;
  }
};

/*Email Control*/
let emailValidate = (email) => {
  let emailResult = document.querySelector('#email-control');
  let emailInput = document.querySelector('#sign-up-email');

  /*
    - No Full Uppercase before @ character
    - Email finished must be domain. For example .....@gmail.com & .....@hotmail.com etc.
  */
  let emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  /*Email Control*/
  if (emailRegex.test(email)) {
    emailResult.innerText = 'Correct.';
    emailResult.style = `
    color: green;
    font-size: 1.4em;
    `;
    emailInput.style = `
    color: green;
    border-color: green;
    `;
  } else {
    emailResult.innerText = 'Invalid email, try again!';
    emailResult.style = `
    color: red;
    font-size: 1.4em;
    `;
    emailInput.style = `
    color: red;
    border-color: red;
    `;
  }
};

/*Phone Control*/
let phoneValidate = (phone) => {
  let phoneResult = document.querySelector('#phone-control');
  let phoneInput = document.querySelector('#phone');

  /*
    - Only Number,
    - No Space
  */
  let phoneRegex = /^[0-9][^\s]*$/;

  /*Phone Control*/
  if (phoneRegex.test(phone)) {
    phoneResult.innerText = 'Correct.';
    phoneResult.style = `
    color: green;
    font-size: 1.4em;
    `;
    phoneInput.style = `
    color: green;
    border-color: green;
    `;
  } else {
    phoneResult.innerText = 'Invalid phone, try again!';
    phoneResult.style = `
    color: red;
    font-size: 1.4em;
    `;
    phoneInput.style = `
    color: red;
    border-color: red;
    `;
  }
};

/*Password Control*/
let passwordValidate = (password) => {
  let passwordResult = document.querySelector('#password-control');
  let passwordInput = document.querySelector('#sign-up-password');

  /*
      - Min 8 characters,
      - Min 1 uppercase letter,
      - Min 1 lowercase letter,
      - Min 1 number,
      - Min 1 special characters
    */
  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  /*Password Control*/
  if (passwordRegex.test(password)) {
    passwordResult.innerText = 'Correct.';
    passwordResult.style = `
      color: green;
      font-size: 1.4em;
      `;
    passwordInput.style = `
      color: green;
      border-color: green;
      `;
  } else {
    passwordResult.innerText = 'Invalid password, try again!';
    passwordResult.style = `
      color: red;
      font-size: 1.4em;
      `;
    passwordInput.style = `
      color: red;
      border-color: red;
      `;
  }
};

/*Create Account*/
let createButton = document.querySelector('#create-account');

createButton.addEventListener('click', () => {
  let fullNameValue = document.querySelector('#full-name').value;
  let emailValue = document.querySelector('#sign-up-email').value;
  let phoneValue = document.querySelector('#phone').value;
  let passwordValue = document.querySelector('#sign-up-password').value;
  fullnameValidate(fullNameValue);
  emailValidate(emailValue);
  phoneValidate(phoneValue);
  passwordValidate(passwordValue);
});
