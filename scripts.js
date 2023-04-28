// Select the form and input element
const form = document.querySelector('#grocery-form');
const groceryInput = document.querySelector('#grocery');

// Select the grocery list container and clear button
const groceryList = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// Add event listener for submitting the form
form.addEventListener('submit', addItem);

// Add event listener for clearing all items
clearBtn.addEventListener('click', clearAllItems);

// Add event listener for editing and deleting items
groceryList.addEventListener('click', editOrDeleteItem);

// Function to add a new item
function addItem(e) {
  e.preventDefault();
  const newItem = groceryInput.value;
  if (newItem !== '') {
    const groceryItem = document.createElement('article');
    groceryItem.classList.add('grocery-item');
    groceryItem.innerHTML = `
      <p id="title">${newItem}</p>
      <div class="btn-container">
        <button type="button" class="edit-btn"><i class="fa-sharp fa-solid fa-pen"></i></button>
        <button type="button" class="delete-btn"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;
    groceryList.appendChild(groceryItem);
    groceryInput.value = '';
  } else {
    showAlert('Please enter a grocery item', 'danger');
  }
}

// Function to edit or delete an item
function editOrDeleteItem(e) {
  const item = e.target.closest('.grocery-item');
  if (e.target.classList.contains('edit-btn')) {
    const title = item.querySelector('#title');
    const text = title.textContent;
    groceryInput.value = text;
    groceryList.removeChild(item);
  } else if (e.target.classList.contains('delete-btn')) {
    groceryList.removeChild(item);
    showAlert('Item removed', 'success');
  }
}

// Function to clear all items
function clearAllItems() {
  while (groceryList.firstChild) {
    groceryList.removeChild(groceryList.firstChild);
  }
  showAlert('All items removed', 'success');
}

// Function to show alert message
function showAlert(message, className) {
  const alert = document.querySelector('.alert');
  alert.style.visibility = "visible";
  alert.classList.add(`alert-${className}`);
  alert.textContent = message;
  setTimeout(() => {
    alert.textContent = '';
    alert.classList.remove(`alert-${className}`);
  }, 2000);
}
