const inputEl = document.getElementById("input-box");
const addBtnEl = document.querySelector(".add-btn");
const deleteBtnEl = document.querySelector(".delete-btn");
const listItemsEl = document.querySelector(".list-items");
addBtnEl.addEventListener("click", addToList);
deleteBtnEl.addEventListener("click", deleteAllItems);
let myItems = [];
const itemsFromLocalStorage = JSON.parse(localStorage.getItem("myItems"));

if (itemsFromLocalStorage) {
  myItems = itemsFromLocalStorage;
  render(myItems);
}

function render(items) {
  let listItems = "";
  for (let i = 0; i < items.length; i++) {
    listItems += `<div class="items">${items[i]}</div>`;
  }
  listItemsEl.innerHTML = listItems;
  console.log(listItemsEl);
}

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
