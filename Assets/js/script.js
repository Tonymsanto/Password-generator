var password = document.getElementById("password");

function passwordLength(){
    var passwordLength = prompt("Pick a password length between 8 and 128");

    if (passwordLength < 8){
        alert("Please pick a password longer than 8 characters")
    }
    else if (passwordLength > 128){
        alert("Please pick a password shorter than 128 characters")
    }
    else {
        return passwordLength;
    }
}

function getPassword(){
    var length = passwordLength();
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz?!@$%^&*()";
    var password = "";

    for (var i = 0; i <= length; i++) {
        var randomNumber = Math.floor(Math.random() * characters.length);
        password += characters.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("password").value = password;
}
