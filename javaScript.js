const input = document.querySelector('.numberInput');
const para = document.querySelector('p');

function showMessage(from, text = "No text given") {
    input.value = '';
    from = '*' + from + '*';
    return from + ': ' + text + "<br>";
}

let from = "Ann";

input.addEventListener("change", () => {
    document.getElementById("message").innerHTML += showMessage(from, input.value);
});