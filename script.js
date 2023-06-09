const alert = document.querySelector('.alert');
const form = document.querySelector('#grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const item = document.querySelector('.grocery-item');
const clearBtn = document.querySelector('.clear-btn');

let editElement;
let editFlag = false;
let editID = "";

//submit form
form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = grocery.id;
    console.log(value);
    if (value && !editFlag) {
        console.log("Add item to list");
    }
    else if (value && editFlag) {
        console.log("Editing");
    }
    else {
        displayAlert("please enter value", "danger")
    }
}

function displayAlert(text,action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
}