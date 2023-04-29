// Select the form and input element
const form = document.querySelector('#grocery-form');
const groceryInput = document.querySelector('#grocery');
const submitBtn = document.querySelector('.submit-btn');
const btnContainer = document.querySelector('.btn-container');
const item = document.querySelector('.list');

submitBtn.addEventListener('click', (e)=> {
  if (groceryInput != "") {
    e.preventDefault();
    //create li
    const newItem = document.createElement('li');
    newItem.innerHTML = groceryInput.value;
    item.appendChild(newItem);
  }
})

