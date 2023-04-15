// a check function to handle the user input
function checkInput() {
    // gets the id of the user input and put them in the variable
    var guessInput = document.getElementById("input");
    // converts the guessInput value into a number
    var guess = Number(guessInput.value);
    // generates a random number using floor division
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    // input the random number to the result section
    var result = document.getElementById("result");
    var images = new Array();

    //random images are set at each condition
    //random images are selected depending on user guess
    images[0] = "https://media.tenor.com/yPUAJMwL2uwAAAAC/gigachad.gif";
    images[1] = "https://media.tenor.com/uONR8GTAw3gAAAAC/smart-thinking.gif";
    images[2] = "https://i.giphy.com/media/3i4xTtJQIJk0o/giphy.webp";
    images[3] = "https://images.unsplash.com/photo-1543877087-ebf71fde2be1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
    images[4] = "https://media.tenor.com/exTZBxFB6iMAAAAC/tyler1-loltyler1.gif";
    images[5] = "https://media.tenor.com/R7Osnuk-EYgAAAAM/disappointed-disappointments.gif";
    images[6] = "https://i.gifer.com/M3yP.gif";

    // checks if user guess is correct
    if (guess == randomNumber) {
        result.innerText = "You guessed it! The number was " + randomNumber;
        // generate the image within a certain range using math.floor
        var num = Math.floor(Math.random() * 2) + 0;
        document.getElementById("images").innerHTML = '<img src="'+images[num]+'" />';
    }
    // handles the guess if it is too high
    else if (guess > randomNumber) {
        result.innerText = "It was too high!! Im sorry you did not guess it! The number was " + randomNumber;
        // var num = Math.floor(Math.random() * 5) + 4
        // var newnum = Integer(num);
        document.getElementById("images").innerHTML = '<img src="'+images[4]+'" />';
    }
    // handles the guess if its too low
    else {
        result.innerText = "Its too low! Better luck next time. The number was " + randomNumber;
        document.getElementById("images").innerHTML = '<img src="'+images[6]+'" />';
    }
}