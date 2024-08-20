// Function to generate a random password
function generateRandomPassword(length, includeNumbers, includeSymbols) {
  let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (includeNumbers) charset += "0123456789";
  if (includeSymbols) charset += "!@#$%^&*()_+";
  
  let password = "";
  for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
}

// Function to generate passwords and update the UI
function generatePassword() {
  const passwordOneEl = document.getElementById("password-one");
  const passwordTwoEl = document.getElementById("password-two");
  
  const length = parseInt(document.getElementById("password-length").value);
  const includeNumbers = document.getElementById("include-numbers").checked;
  const includeSymbols = document.getElementById("include-symbols").checked;
  
  passwordOneEl.textContent = generateRandomPassword(length, includeNumbers, includeSymbols);
  passwordTwoEl.textContent = generateRandomPassword(length, includeNumbers, includeSymbols);
}

// Function to copy text to clipboard
function copyToClipboard(text) {
  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = text;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand('copy');
  document.body.removeChild(tempTextArea);
}

// Function to copy the first password
function copyPasswordOne() {
  const passwordOneEl = document.getElementById("password-one");
  copyToClipboard(passwordOneEl.textContent);
  alert("Password copied to clipboard!");
}

// Function to copy the second password
function copyPasswordTwo() {
  const passwordTwoEl = document.getElementById("password-two");
  copyToClipboard(passwordTwoEl.textContent);
  alert("Password copied to clipboard!");
}

// Function to validate and adjust password length
function validatePasswordLength() {
  const lengthInput = document.getElementById("password-length");
  let length = parseInt(lengthInput.value);
  if (isNaN(length) || length < 8) length = 8;
  if (length > 32) length = 32;
  lengthInput.value = length;
}

function validatePasswordLength() {
  const input = document.getElementById('password-length');
  const value = parseInt(input.value);

  const validate = () => {
    if (value < 8) {
      input.value = 8;
    } else if (value > 32) {
      input.value = 32;
    } else {
      // If the value is between 8 and 32, keep the original value
      input.value = value;
    }
  };

  setTimeout(validate, 500);
}