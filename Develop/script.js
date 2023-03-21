// click button, start prompt

// prompt for length of password
// take user input and store in variable, if less than 8 or greater than 128, alert user and start over

// when length is valid, move to next prompt

// prompt for lowercase
// take user input and store in variable, if yes, add lowercase to possibleChars
// getLowerCase set to true vs false
// possibleChars

// get lowercase characters from ASCII table? what's the best way? https://www.w3schools.com/charsets/ref_html_ascii.asp
// It contains the numbers from 0-9, the upper and lower case English letters from A to Z, and some special characters.
// lowercase characters are 97-122

// when yes / no is selected, move to next prompt

// prompt for uppercase
// take user input and store in variable, if yes, add uppercase to possibleChars
// uppercase characters are 65-90

// when yes / no is selected, move to next prompt

// prompt for numeric
// take user input and store in variable, if yes, add numeric to possibleChars
// numeric characters are 48-57

// when yes / no is selected, move to next prompt

// prompt for special characters
// take user input and store in variable, if yes, add special characters to possibleChars
// special characters are 33-47, 58-64, 91-96, 123-126

// when yes / no is selected, move to next prompt

// if no character types selected, alert user and start over "at least one character type must be selected"
// start over at lowercase prompt

// when user selects yes to a prompt, add ALL of the characters from that type to an array
// make one huge array of all possible characters
// then randomize the array
// then take the first x characters from the array, where x is the length of the password
// then convert the array to a string

// string from character code, String.fromCharCode()
// then random

// when to factor in length? before or after randomizing?

// password will populate in textfield and be copied to clipboard, alert user "password copied to clipboard"
// textfield should not be editable (except by clicking the generate button)

const generateBtn = document.querySelector("#generate");

// var lowerCase = confirm("Use lowercase characters in your password?");
// var upperCase = confirm("Use uppercase characters in your password?");
// var numeric = confirm("Use numeric characters in your password?");
// var special = confirm("Use special characters in your password?");

var possibleChars = [];

// Write password to the #password input
function generatePassword() {
    const getPasswordLength = () => {
        const length = parseInt(prompt("Enter the length of the password (between 8 and 128):"));
        if (length < 8 || length > 128) {
          alert("Invalid password length. Please try again.");
          return getPasswordLength();
        }
        return length;
    }
    const length = getPasswordLength();

    let possibleChars = "";

    if (confirm("Do you want to include lowercase characters?")) {
        for (let i = 97; i <= 122; i++) {
          possibleChars += String.fromCharCode(i);
        }
      }

    if (confirm("Do you want to include uppercase characters?")) {
        for (let i = 65; i <= 90; i++) {
          possibleChars += String.fromCharCode(i);
        }
      }

    if (confirm("Do you want to include numeric characters?")) {
        for (let i = 48; i <= 57; i++) {
          possibleChars += String.fromCharCode(i);
        }
      }

    if (confirm("Do you want to include special characters?")) {
        const specialCharRanges = [
            { start: 33, end: 47 },
            { start: 58, end: 64 },
            { start: 91, end: 96 },
            { start: 123, end: 126 },
          ];
          for (const range of specialCharRanges) {
            for (let i = range.start; i <= range.end; i++) {
              possibleChars += String.fromCharCode(i);
            }
          }

    if (possibleChars.length === 0) {
        alert("At least one character type must be selected.");
        return generatePassword();
    }

        let generatedPassword = "";

            for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * possibleChars.length);
            generatedPassword += possibleChars[randomIndex];
        }

        // fix this cuz I need a shuffle algorithm

    // You can now display the password and copy it to the clipboard.
    console.log(generatedPassword);
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);