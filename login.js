document.querySelector('.button').onclick = function () {
    var key = document.querySelector('.key').value;
    function testUrl() {
        window.location = "downloads.html";
        return false;
    }
    if (key == firebase.database().ref("Keys/1/Key.Value")) {
        window.location.href = "samdownloads.html"
    } else if (key == "jR1IENF8OjYV2Xmqu/uSWAix+q69QhhgkfT+dbBnNcI=") {
        window.location.href = "georgedownloads.html"
    }

}
