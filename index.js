const inputEl = document.getElementById("input-box");
const addBtnEl = document.querySelector(".add-btn");
const deleteBtnEl = document.querySelector(".delete-btn");
const listItemsEl = document.querySelector(".list-items");
addBtnEl.addEventListener("click", addToList);
deleteBtnEl.addEventListener("click", deleteAllItems);

function addToList() {
  let input = inputEl.value;

  listItemsEl.innerHTML += `<div class="items">${input}</div>`;
}

function deleteAllItems() {
  listItemsEl.innerHTML = "";
}
