//console.log("hello from script");
const myButton = document.querySelector('button');
const myBox = document.querySelector('Box');
const colors = ['red', 'green', 'blue', 'yellow'];
//console.log(myButton);
let randomValues = [];
let rnd = Math.floor(Math.random() * colors.lenght();
    console.log(rnd);
    myBox

let name = "Harry Potter";
console.log(´Hello, $(name)´);

myButton.addEventListener('click', changeColor);

function changeColor() {
   if(randomValues.length === 0) {
       for(let i = 0; i < colors.length; i++ ) {
           randomValues.push(i);
           console.log("$(i) added");
       }
   }
   let randomIndex = Math.floor(Math.random() * randomValues.length);
   let indexFromMyarray = randomValues[randomIndex];
   randomValues.splice(randomIndex, 1);

   myBox.style.backgroundColor = colors(indexFromMyarray);


}