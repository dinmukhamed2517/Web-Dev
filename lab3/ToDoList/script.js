const addButton = document.querySelector("#add-button");
const userInput = document.querySelector(".input-text");
const container = document.querySelector(".items-container");
addButton.addEventListener("click",function (){
    let list = [];
    let newDiv = document.createElement("div");
    let checkBox = document.createElement("input");
    let deleteButton = document.createElement("img");
    let content = document.createElement("span");
    deleteButton.className = "delete-button";
    deleteButton.src = "trashcan.png";
    checkBox.type ="checkbox";
    checkBox.className = "completed";
    content.innerText = userInput.value;
    list.push(userInput.value);
    userInput.value ="";
    content.className = "content";
    deleteButton.addEventListener("click",function (){
       container.removeChild(newDiv);
    });
    newDiv.appendChild(checkBox);
    newDiv.appendChild(content);
    newDiv.appendChild(deleteButton);
    newDiv.appendChild(document.createElement("br"));
    container.appendChild(newDiv);
}) ;
в




