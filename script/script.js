
//let title = document.querySelector('main-heading-1');
// home décor idea
// DIY idea
// outfit idea
// chai time snacks idea

let text = document.querySelector('.main-heading-sub'); //.textContent="hello guyz";
const bulletButtons = document.querySelectorAll('.bullets');
text.style.color="#339af0"; 

const notes = [ 'home décor idea', 'DIY idea','outfit idea' , 'chai time snacks idea']; 
const colors = ['#339af0', '#20c997', '#ff922b', '#ff6b6b'];
let delay = 3000; // in seconds



bulletButtons.forEach(el=>{
  el.addEventListener("click",function(){
    console.log("hello world");
    
  } )
})

console.log(bulletButtons);

let i = 0;
function sayHi() {
 
   //reseting all previous bullet to grey;
   for(let j = 0; j<=3; j++) {
    bulletButtons[j].style.backgroundColor= '#dee2e6';
   }

    text.style.animation= "text-animation 3s infinite cubic-bezier(0.1, 0.3, 1.0, 0.2)";
    text.textContent= notes[i];
    text.style.color= colors[i];
    bulletButtons[i].style.backgroundColor  = colors[i];
   
    i++;
    if (i > 3) {
        i = 0;
    }
}
setInterval(sayHi, delay);
let intervalId = setInterval(sayHi, delay);
clearInterval(intervalId);
