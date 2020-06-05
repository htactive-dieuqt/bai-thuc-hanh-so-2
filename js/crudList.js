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
    var inputValue = document.getElementById(`myInput-${action}`).value;
    var id = Math.random();
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        var li = document.createElement("li");
        li.className = `card-${action}`;
        li.id = id;
        li.setAttribute("onclick", "titleCard(id)");
        var a = document.createElement("a");
        a.className = `updateBtn-${action}`;
        var btnUpdate = document.createElement("span");
        btnUpdate.className = "glyphicon glyphicon-pencil";
        a.appendChild(btnUpdate);
        li.innerHTML = inputValue;
        li.appendChild(a);
        document.getElementById(`my-${action}`).appendChild(li);
        // Xoá cái đã nhập trong input
        document.getElementById(`myInput-${action}`).value = "";
    }
}
// UPDATE CARD 
function titleCard(id, action) {
    var titleByCard = document.getElementById(`${id}`).innerText;
    document.getElementById(`${id}`).setAttribute("data-toggle", "modal");
    document.getElementById(`${id}`).setAttribute("data-target", "#myModal");
    document.getElementById("titleCardLI").innerHTML = titleByCard;

    // var titleByUL = document.getElementById(`UL-${action}`).innerText;
    // document.getElementById(`UL-${action}`).setAttribute("data-toggle", "modal");
    // document.getElementById(`UL-${action}`).setAttribute("data-target", "#myModal");
    // document.getElementById("titleUL").innerHTML = titleByUL;
}

// EDIT CARD
function func1(event, id) {
    event.stopPropagation();
}