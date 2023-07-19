const generateBtn = document.querySelector("#generate");

// var lowerCase = confirm("Use lowercase characters in your password?");
// var upperCase = confirm("Use uppercase characters in your password?");
// var numeric = confirm("Use numeric characters in your password?");
// var special = confirm("Use special characters in your password?");

var possibleChars = [];

function generatePassword() {
    const getPasswordLength = () => {
        const length = parseInt(
            prompt("Enter the length of the password (between 8 and 128):")
        );
        if (isNaN(length) || length < 8 || length > 128) {
            alert("Invalid password length. Please try again.");
            return getPasswordLength();
        }
        return length;
    };
    const length = getPasswordLength();
    console.log(length);

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
    }

    if (possibleChars.length === 0) {
        alert("At least one character type must be selected.");
        return generatePassword();
    }

    let generatedPassword = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * possibleChars.length);
        generatedPassword += possibleChars[randomIndex];
    }
    // fix this cuz I need a shuffle algorithm

    // Display the password in the textarea
    const passwordField = document.querySelector("#password");
    passwordField.value = generatedPassword;
}

generateBtn.addEventListener("click", generatePassword);
