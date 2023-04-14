function checkInput() {
    var guessInput = document.getElementById("input");
    var guess = Number(guessInput.value);
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    var result = document.getElementById("result");
    var images = new Array();

    //random images are set at each condition
    images[0] = "https://media.tenor.com/yPUAJMwL2uwAAAAC/gigachad.gif";
    images[1] = "https://media.tenor.com/uONR8GTAw3gAAAAC/smart-thinking.gif";
    images[2] = "https://i.giphy.com/media/3i4xTtJQIJk0o/giphy.webp";
    images[3] = "https://images.unsplash.com/photo-1543877087-ebf71fde2be1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
    images[4] = "https://media.tenor.com/exTZBxFB6iMAAAAC/tyler1-loltyler1.gif";
    images[5] = "https://media.tenor.com/R7Osnuk-EYgAAAAM/disappointed-disappointments.gif";
    images[6] = "https://i.gifer.com/M3yP.gif";

    if (guess == randomNumber) {
        result.innerText = "You guessed it! The number was " + randomNumber;
        var num = Math.floor(Math.random() * 2) + 0;
        document.getElementById("images").innerHTML = '<img src="'+images[num]+'" />';
    } else if (guess > randomNumber) {
        result.innerText = "It was too high!! Im sorry you did not guess it! The number was " + randomNumber;
        // var num = Math.floor(Math.random() * 5) + 4
        // var newnum = Integer(num);
        document.getElementById("images").innerHTML = '<img src="'+images[4]+'" />';
    } else {
        result.innerText = "Its too low! Better luck next time. The number was " + randomNumber;
        document.getElementById("images").innerHTML = '<img src="'+images[6]+'" />';
    }
}
