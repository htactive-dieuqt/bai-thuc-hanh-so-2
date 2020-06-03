// CALL Add List
function showInputField(valueTask) {
    document.getElementById(`${valueTask}-div`).style.display = "none";
    document.getElementById(`${valueTask}-input`).style.display = "block";
}
// DELETE LIST 
function hideInputField(valueTask) {
    document.getElementById(`${valueTask}-div`).style.display = "block";
    document.getElementById(`${valueTask}-input`).style.display = "none";
}
// ADD LIST 
function newElement(action) {
    var li = document.createElement("li");
    var inputValue = document.getElementById(`myInput-${action}`).value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById(`my-${action}`).appendChild(li);
        document.getElementById(`myInput-${action}`).value = "";
    }
}