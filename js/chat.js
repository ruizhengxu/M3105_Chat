$(document).ready(function () {

    const pseudo = prompt("Quel est votre pseudo ?");
    let ws = new WebSocket(`ws://127.0.0.1:8080/chat?pseudo=${pseudo}`, 'http');

    ws.onopen = function (event) {
        console.log("Connecté");
    };

    ws.onmessage = function (event) {
        console.log('Message from server ', event.data);
        let div = document.getElementById('Messages');

        const data = JSON.parse(event.data);

        var now = new Date();
        var datetime = now.getFullYear() + '-' + (now.getMonth()+1) + '-' + now.getDate() + ' ' +
            now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

        div.innerHTML = div.innerHTML + '<div class="messageContainer"><img src="../images/profil.png" alt="profil" class="img-thumbnail rounded mr-2 float-left">' +
            '<p class="small"><small>' + datetime + '</small></p>' + '<p class="content">' + data.emetteur + " : " + data.texte + "</p></div>";

        let message = document.getElementById("inputMessage");
        message.value = "";

        $('#Messages').parent().animate({
            scrollTop: $('#Messages').height()
        }, 1000);
    };

    $("button").click(function(){
        let msg = $("input").val();
        console.log(msg);
        ws.send(msg);
    });
});