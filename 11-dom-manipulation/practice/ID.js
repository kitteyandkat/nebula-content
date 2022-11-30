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

let button = document.querySelector('.submit')
let name = document.querySelector('.name')
let lName = document.querySelector('.lName')
let number = document.querySelector('.number')
let address = document.querySelector('.address')
let funFact = document.querySelector('.funFact')
let nameValue = document.querySelector('.idName')
let lNameValue = document.querySelector('.idLName')
let numberValue = document.querySelector('.idNumber')
let addressValue = document.querySelector('.idAddress')
let funFactValue = document.querySelector('.idFunFact')

button.addEventListener('click', e =>{
    nameValue.innerText=`${name.value}`
    lNameValue.innerText=`${lName.value}`
    numberValue.innerText=`${number.value}`
    addressValue.innerText=`${address.value}`
    funFactValue.innerText=`${funFact.value}`
    console.log(nameValue)
    console.log(lNameValue)
    console.log(numberValue)
    console.log(addressValue)
    console.log(funFactValue)
    // let info = document.querySelector('.submittedText')
    // info.appendChild(nameValue)
    // info.appendChild(lNameValue)
    // info.appendChild(numberValue)
    // info.appendChild(addressValue)
    // info.appendChild(funFactValue)
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