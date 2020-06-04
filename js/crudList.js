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
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        var li = document.createElement("li");
        li.className = `card-${action}`;
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
// UPDATE LIST
function updateElement(action) {

}

// value = `${}`
// id="done-1" onclick="editTask('done',1)"
// editTask = (listID, taskID) => {
//     var editTaskByModal = document.getElementById(`${listID}`, `${taskID}`).innerText;
//     var decs = document.getElementById("");
//     document.getElementById(`${listId}-${taskId}`).setAttribute("data-toggle", "modal")
//     document.getElementById(`${listId}-${taskId}`).setAttribute("data-target", "#myModal");
//     document.getElementById("titleModal").innerHTML = editTaskByModal;
//     let p = document.createElement('p');
//     p.innerHTML = decs;
//     document.getElementById("decsModal").appendChild(p);
// }