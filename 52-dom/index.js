const input = document.getElementById('input');

input.addEventListener('focus', function(event) {
  console.log('event: ', event);
  input.after('I know you password: ', event.target.value);
  console.log('change');
});
















// const btn = document.getElementById('button');



// btn.addEventListener('click', function(event) {
//   console.log('event: ', event);
//   event.preventDefault();
//   console.log('click 1');
// });

// const clickEvent = new Event('click');
// // console.log('clickEvent: ', clickEvent);

// btn.dispatchEvent(clickEvent);

// const div2 = document.getElementById('div2');

// div2.addEventListener('click', (event) => {
//   event.stopPropagation();
//   div2.style.background = 'green';
// })

// const div1 = document.getElementById('div1');

// div1.addEventListener('click', () => {
//   div1.style.background = 'yellow';
// })
















// document.addEventListener('contextmenu', function(event) {
//   event.stopPropagation();

//   console.log('contextmenu');
// });


// let counter = 0;
// function listener2() {
//   console.log('click 2');
//   counter++;
//   if (counter > 5) {
//     btn.removeEventListener('click', listener2);
//   }
// }

// btn.addEventListener('click', listener2);




