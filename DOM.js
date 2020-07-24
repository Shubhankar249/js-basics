const text=document.querySelector('.title')
const changeColor=document.querySelector('.changeColor')

// text.style.color="red"   // changing css through js
// text.classList.add('change')    // can add css class using classlist.add, remove-> classlist.remove

changeColor.addEventListener('click', function () {
    text.classList.toggle('change') // toggle makes reverting back the change when button is clicked twice.
})

const userList=document.querySelectorAll('.name-list li')   // getting all elements at once

for (user of userList) {
    user.addEventListener('click', function () {
        this.style.color="green"    // changing any li to green on click
    })
}

// Adding a name to the list
const users=document.querySelector('.name-list')
const newName=document.querySelector('.list-input')
const addName=document.querySelector('.addName')

addName.addEventListener('click', function () {
    const newLi=document.createElement('LI')    // creating a new el
    const liContent=document.createTextNode(newName.value)  // adding text to li
    newLi.appendChild(liContent)    // adding li to ul
    users.appendChild(newLi)
    newLi.addEventListener('click', function () {
        this.style.color="green"    // changing any li to green on click
    })  // make the css applicable to new el
})


