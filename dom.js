const addicon = document.querySelector(".addicon");
const input = document.querySelector(".maininput");
const form = document.querySelector(".todo-form");
const ul = document.querySelector("ul");
let clear = document.querySelector(".clear");
let todos = [];
class List {
  constructor(text) {
    this.text = text;
  }
}
function createTodo(item) {
  let newTodo = new List(item);
  return newTodo;
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  todos.push(createTodo(input.value));
  resetForm();
  drawTable(todos);
});
function drawTable(array) {
  ul.innerHTML = "";

  array.forEach((item) => {
    const liElem = document.createElement("li");

    liElem.innerHTML += `<span>${item.text}</span>
    <div class="buttons">
      <button class="complete">
        <i class="fa-solid fa-plus"></i>
      </button>
      <button class="delete">
        <i class="fa-solid fa-plus"></i>
      </button>
      <button class="edit">
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>`;
    ul.append(liElem);
  });

  const allDeleteBtns = document.querySelectorAll(".delete");
  //   console.log(allDeleteBtns);

  allDeleteBtns.forEach((item,index) => {
    item.addEventListener("click", function(){

    })
  });
}
function resetForm() {
  input.value = "";
}

clear.addEventListener("click", function () {
  todos.length = 0;
  //   drawTable(todos);
  ul.innerHTML = "";
});
