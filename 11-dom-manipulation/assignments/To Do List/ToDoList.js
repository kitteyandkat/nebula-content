// for (let i = 0; i <= 100; i++) {
//     let element = document.createElement('field')
//     document.querySelector(".ToDoList").appendChild(element)
// }
let field = document.querySelector('.field')
let checkbox = document.querySelector(".box")
let inputValue = ''
let addButton = document.querySelector('.add')
let toDoList = document.querySelector('.ToDoList')

let x = document.querySelector(".congratulations");
x.style.display = "none";
console.log(x.style.display);

function Unhide(e) {
    if (e.target.checked) {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    console.log(x.style.display);
    setTimeout(() => {

        x.style.display = 'none';
        console.log(x.style.display)
    }, 2500);
}


checkbox.addEventListener("click", Unhide);

field.addEventListener('input', (e) => {
    inputValue = e.target.value
    console.log(inputValue)
})

addButton.addEventListener('click', ()=>{
    const newField = document.createElement('input');
    const newCheckbox = document.createElement('input');
    const newDiv = document.createElement("div")
    newField.classList.add("field")
    newCheckbox.classList.add("box")
    newCheckbox.type="checkbox";
    newField.value = field.value;
    field.value = '';
    newDiv.appendChild(newCheckbox);
    newDiv.appendChild(newField);
    toDoList.appendChild(newDiv);
    newCheckbox.addEventListener("click", Unhide);
})
