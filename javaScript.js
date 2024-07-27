const input = document.querySelector('.numberInput');
const para = document.querySelector('p');

function showMessage(from = "User", text = "No text given") {
    input.value = '';
    from = '*' + from + '*';
    return from + ': ' + text + "<br>";
}

function saludar(name) {
    return name || "User";
}

let from = prompt("Cual es tu nombre?");
alert(saludar(from));

input.addEventListener("change", () => {
    document.getElementById("message").innerHTML += showMessage(from, input.value);
});