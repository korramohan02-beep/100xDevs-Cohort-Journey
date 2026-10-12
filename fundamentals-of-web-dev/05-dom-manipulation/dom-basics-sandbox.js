// console.log("CLASS 5 = DOM Basics!");

//DOM = is a programming interface for web documents.
// it represents the structure of a web page as a tree of objects.

let todoIndex = 1;

function addTodo() {
  //write the code that reads the contents of the input
  //create a new todo on the html dom
    //step 1 - create a new div element in js (as a variable)
    //step 2 - insert the div element to a parent div
  //clears the input box
  const element = document.getElementById("todoInput");
  const todo = element.value;
  element.value = "";

  const todoDiv = document.createElement("div");
  todoDiv.setAttribute("id", "todo" + todoIndex);

  const todoSpan = document.createElement("span");
  todoSpan.innerHTML = todo;

  todoDiv.appendChild(todoSpan);

  const todoButton = document.createElement("button");
  todoButton.innerHTML = "Delete todo";
  todoButton.setAttribute("onclick", "deleteTodo(" + todoIndex + ")");

  todoDiv.appendChild(todoButton);

  document.getElementById("todos").appendChild(todoDiv);
  todoIndex = todoIndex + 1;
}

function deleteTodo(index) {

  const divElement = document.getElementById("todo" + index);
  document.getElementById("todos").removeChild(divElement);//do this or as below

  //alternatively you can also delete like this
  // divElement.parentElement.removeChild(divElement);
  
}