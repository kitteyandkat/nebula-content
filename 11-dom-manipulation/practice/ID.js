/*
The goal is to have someone to fill in their 'ID card info'
  - [X] Create a folder with an index.html, styles.css & script.js
  - [X] Hook up the files together - how do we test they are working?
  - [x ] A user must be able to input their Name, id number, address & a fun fact about themselves
    - [x ] Create a form with the appropriate inputs
    - [ x] Create a button that will submit the form
      - Note: Use e.preventDefault() to prevent the page from refreshing
  - [ ] After clicking an update button their id card will update
    - [ ] Style a div to look like an ID card - curved corners, an image (start with a  placeholder image)
*/

let name = document.querySelector('.name')
let nameValue = document.querySelector('.idName')
let button = document.querySelector('.submit')

button.addEventListener('click', e =>{
    nameValue.innerText=`${name.value}`
    console.log(nameValue)
    let info = document.querySelector('.iDCard')
    info.appendChild(nameValue)
})

// nameFill.addEventListener('input', (e) => {
//     nameValue = e.target.value
//     console.log(nameValue)
// })

// nameFill.addEventListener('input', (e) => {
//     nameValue = e.target.value
//     console.log(nameValue)
// })

const image_input = document.querySelector(".image-input");

document.querySelector("#display-image").style.backgroundImage = `url('http://parcsociety.ca/wp-content/uploads/2019/11/user.png')`;

image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});