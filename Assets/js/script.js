var password = document.getElementById("password");

function getPassword(){
    var passLength = 14; 
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz?!@$%^&*()";
    var password = "";

    for (var i = 0; i <= passLength; i++) {
        var randomNumber = Math.floor(Math.random() * characters.length);
        password += characters.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("password").value = password;
}
