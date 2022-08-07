var password = document.getElementById("password");

function passwordLength(){
    //Prompt user to give a password length and store it as variable passwordLength
    var passwordLength = prompt("Pick a password length between 8 and 128");

    //return errors if length isn't in range
    if (passwordLength <= 8){
        alert("Please pick a password longer than 8 characters")
    }
    else if (passwordLength >= 128){
        alert("Please pick a password shorter than 128 characters")
    }
    else { //or return client input
        return passwordLength;
    }
}

function specialCharacters(){
    //create empty string to store characters in
    var chars = "";

    //prompt user to choose which characters they want in their passwords and store as variables
    var capLetterPrompt = confirm("Would you like capital letters in your password?");
    var lowerLetterPrompt = confirm("Would you like lower case letters in your password?");
    var numberPrompt = confirm("Would you like numbers in your password?");
    var specialPrompt = confirm("Would you like special characters in your password?")

    //append characters to "chars" string when they choose the category
    if (capLetterPrompt === true){
        var capitalChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        chars = chars.concat(capitalChars);
    }
    if (lowerLetterPrompt === true){
        var lowerChars = "abcdefghijklmnopqrstuvwxyz";
        chars = chars.concat(lowerChars);
    }
    if (numberPrompt === true) {
        var num = "1234567890";
        chars = chars.concat(num);
    }
    if (specialPrompt === true){
        var specialChar = "?!@#$%^&*()_-+";
        chars = chars.concat(specialChar);
    }
    //if they say no to all, error message pops up
    else if (capLetterPrompt === false && lowerLetterPrompt === false && numberPrompt === false && specialPrompt === false) {
        alert("No characters picked for password! Try again");
    }
    return chars;
}

function getPassword(){
    //pull returned variables from user functions
    var length = passwordLength();
    var characters = specialCharacters();
    var password = "";

    //Pick random numbers from user's char choices, until user length is reached
    for (var i = 0; i <= length; i++) {
        var randomNumber = Math.floor(Math.random() * characters.length);
        password += characters.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("password").value = password;
}