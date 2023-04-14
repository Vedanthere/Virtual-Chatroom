let ws;
function newRoom(){
    // calling the ChatServlet to retrieve a new room ID
    let code = document.getElementById("room-code").value;
    if(code.length == 0)
    {
        let callURL= "http://localhost:8080/WSChatServer-1.0-SNAPSHOT/chat-servlet";
        fetch(callURL, {
            method: 'GET',
            headers: {
                'Accept': 'text/plain',
            },
        })
            .then(response => response.text())
            .then(response => enterRoom(response)); // enter the room with the code
    }
    else
    {
        enterRoom(code);
    }

}
function enterRoom(code){
    // create the web socket
    ws = new WebSocket("ws://localhost:8080/WSChatServer-1.0-SNAPSHOT/ws/"+code);

    document.getElementById("room").innerHTML = "<h3>You are chatting in the room "+code+" </h3>";
    document.getElementById("room").innerHTML += "<h3><button id=\"refresh\" onclick=\"showRooms()\">Refresh</button></h3>";

    // parse messages received from the server and update the UI accordingly
    ws.onmessage = function (event) {
        console.log(event.data);
        // parsing the server's message as json
        let message = JSON.parse(event.data);

        // handle message
        document.getElementById("log").value += "[" + timestamp() + "] " + message.message + "\n";
        }
    setTimeout(function() {
        showRooms();
    }, 100);
}
function timestamp() {
    var d = new Date(), minutes = d.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    return d.getHours() + ':' + minutes;
}

document.getElementById("input").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        let request = {"type":"chat", "msg":event.target.value};
        ws.send(JSON.stringify(request));
        event.target.value = "";
    }
});

function showRooms()
{
    let callURL= "http://localhost:8080/WSChatServer-1.0-SNAPSHOT/testing";
    fetch(callURL, {
        method: 'GET',
        headers: {
            'Accept': 'text/plain',
        },
    })
        .then(response => response.text())
        .then(response => displayRooms(response));
}

function displayRooms(data)
{
    let listOfWords = data.split(",");
    listOfWords = listOfWords.filter(function(e){ return e.replace(/(\r\n|\n|\r)/gm,"")});
    document.getElementById("roomList").innerHTML = "";
    listOfWords.forEach(element => addBox(element));
}

function addBox(element)
{
    let box = document.getElementById("roomList");
    box.innerHTML += `<button onclick=switchRoom(\"${element}\")>${element}</button> <br> <br>`;
}

function switchRoom(code)
{
    ws.close();
    ws = new WebSocket("ws://localhost:8080/WSChatServer-1.0-SNAPSHOT/ws/"+code);
    document.getElementById("room").innerHTML = "<h3>You are chatting in the room "+code+" </h3>";
    document.getElementById("room").innerHTML += "<h3><button id=\"refresh\" onclick=\"showRooms()\">Refresh</button></h3>";
    ws.onmessage = function (event) {
        console.log(event.data);
        // parsing the server's message as json
        let message = JSON.parse(event.data);

        // handle message
        document.getElementById("log").value += "[" + timestamp() + "] " + message.message + "\n";
    }
}

const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (event)=>{
    cursor.style.left = event.pageX+"px";
    cursor.style.top = event.pageY+"px";

})


let turn = 1;
function game(id)
{
    if(turn == 1){
        document.getElementById(id).value = "         X";
        turn = 2;
    }

    else if (turn == 2) {
        document.getElementById(id).value = "         O";
        turn = 1;
    }
}

function WorL(){
    let b1 = document.getElementById('11').value;
    let b2 = document.getElementById('12').value;
    let b3 = document.getElementById('13').value;
    let b4 = document.getElementById('21').value;
    let b5 = document.getElementById('22').value;
    let b6 = document.getElementById('23').value;
    let b7 = document.getElementById('31').value;
    let b8 = document.getElementById('32').value;
    let b9 = document.getElementById('33').value;

    if(b1 === 'X' && b2 === 'X' && b3 ==='X')
    {
        if(turn != 3) {
            console.log("Player 1 wins");
        }
        turn = 3;
    }
    else if(b4 === 'X' && b5 === 'X' && b6 ==='X'){
        if(turn != 3) {
            console.log("Player 1 wins");
        }
        turn = 3;
    }
    else if(b7 === 'X' && b8 === 'X' && b9 ==='X'){
        if(turn != 3) {
            console.log("Player 1 wins");
        }
        turn = 3;
    }


    else if(b1 === 'X' && b4 === 'X' && b7 ==='X'){
        if(turn != 3) {
            console.log("Player 1 wins");
        }
        turn = 3;
    }
    else if(b2 === 'X' && b5 === 'X' && b8 ==='X'){
        if(turn != 3) {
            console.log("Player 1 wins");
        }
        turn = 3;
    }
    else if(b3 === 'X' && b6 === 'X' && b9 ==='X'){
        if(turn != 3) {
            console.log("Player 1 wins");
        }
        turn = 3;
    }


    else if(b1 === 'X' && b5 === 'X' && b9 ==='X'){
        if(turn != 3) {
            console.log("Player 1 wins");
        }
        turn = 3;
    }
    else if(b3 === 'X' && b5 === 'X' && b7 ==='X'){
        if(turn != 3) {
            console.log("Player 1 wins");
        }
        turn = 3;
    }



    if(b1 === 'O' && b2 === 'O' && b3 ==='O')
    {
        if(turn != 3) {
            console.log("Player 2 wins");
        }
        turn = 3;
    }
    else if(b4 === 'O' && b5 === 'O' && b6 ==='O'){
        if(turn != 3) {
            console.log("Player 2 wins");
        }
        turn = 3;
    }
    else if(b7 === 'O' && b8 === 'O' && b9 ==='O'){
        if(turn != 3) {
            console.log("Player 2 wins");
        }
        turn = 3;
    }


    else if(b1 === 'O' && b4 === 'O' && b7 ==='O'){
        if(turn != 3) {
            console.log("Player 2 wins");
        }
        turn = 3;
    }
    else if(b2 === 'O' && b5 === 'O' && b8 ==='O'){
        if(turn != 3) {
            console.log("Player 2 wins");
        }
        turn = 3;
    }
    else if(b3 === 'O' && b6 === 'O' && b9 ==='O'){
        if(turn != 3) {
            console.log("Player 2 wins");
        }
        turn = 3;
    }


    else if(b1 === 'O' && b5 === 'O' && b9 ==='O'){
        if(turn != 3) {
            console.log("Player 2 wins");
        }
        turn = 3;
    }
    else if(b3 === 'O' && b5 === 'O' && b7 ==='O'){
        if(turn != 3) {
            console.log("Player 2 wins");
        }
        turn = 3;
    }

}

window.onload = showRooms();


