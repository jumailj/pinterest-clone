
//let title = document.querySelector('main-heading-1');
// home décor idea
// DIY idea
// outfit idea
// chai time snacks idea

let text = document.querySelector('.main-heading-1'); //.textContent="hello guyz";
text.style.color="#339af0"; 

const notes = [ 'home décor idea', 'DIY idea','outfit idea' , 'chai time snacks idea']; 
const colors = ['#339af0', '#20c997', '#ff922b', '#ff6b6b'];
let delay = 4000; // in seconds

const newspaperSpinning = [
    { transform: "translateY(8px)" , opacity: "1" },
    { transform: "translateY(-10px) " , opacity: "0.8"},
    {opacity: "0"}
  ];
  
  const newspaperTiming = {
    duration: delay,
    iterations: 1,
  };



text.animate(newspaperSpinning,newspaperTiming);
//document.getElementById("p2").style.color = "blue";


  //newspaper.animate(newspaperSpinning, newspaperTiming);

let i = 1;
function sayHi() {
   // console.log('hello world');
    text.textContent= notes[i];
    text.style.color= colors[i];
    text.animate(newspaperSpinning,newspaperTiming);

    console.log('  i  = ' + i);
    i++;
    if (i > 3) {
        i = 0;
    }


  // text.className.add('text-animation');
}
setInterval(sayHi, delay);
let intervalId = setInterval(sayHi, delay);
clearInterval(intervalId);


//setInterval(sayHi, 1000);