let clicked = false;
let body = document.querySelector('body')
let field = document.querySelector('#myInput')
let inputValue = ''
let heading = document.createElement('h1')
let button = document.querySelector('button')

document.addEventListener
    ('click', (e) => {
        console.log(e.target)
        if (e.target === document.querySelector('.square')) {
            clicked = !clicked
            console.log(`clicked: ${clicked}`)
        }
        clicked ? body.style.backgroundColor = 'blue' : body.style.backgroundColor = 'white'
    })

    field.addEventListener('input', (e) => {
        inputValue = e.target.value
        console.log(inputValue)
        heading.innerText
    })

button.addEventListener("click", (event) => {
    if(!clicked){
        document.querySelector('body').appendChild(heading)
}
})
    
