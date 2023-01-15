const inputEl = document.getElementById("input-box");
const addBtnEl = document.querySelector(".add-btn");
const listItemsEl = document.querySelector(".list-items");

addBtnEl.addEventListener("click", addToList);

function addToList() {
  let input = inputEl.value;

  listItemsEl.innerHTML += `<div class="items">${input}</div>`;
}
