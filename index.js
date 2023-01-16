const inputEl = document.getElementById("input-box");
const addBtnEl = document.querySelector(".add-btn");
const deleteBtnEl = document.querySelector(".delete-btn");
const listItemsEl = document.querySelector(".list-items");
addBtnEl.addEventListener("click", addToList);
deleteBtnEl.addEventListener("click", deleteAllItems);
let myItems = [];

function addToList() {
  let input = inputEl.value;

  if (input) {
    myItems.push(input);
    localStorage.setItem("myItems", JSON.stringify(myItems));
    listItemsEl.innerHTML += `<div class="items">${input}</div>`;
    inputEl.value = "";
  } else {
    return;
  }
}

function deleteAllItems() {
  listItemsEl.innerHTML = "";
}
