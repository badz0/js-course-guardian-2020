const menu = document.getElementsByClassName('menu')[0];

function toggle() {
  menu.classList.toggle('menu--open');
}
document.getElementById('open')
  .addEventListener('click', toggle);

document.getElementById('close')
  .addEventListener('click', toggle);


document.body.addEventListener('click', (event) => {
  if (event.target !== menu) {
    menu.classList.remove('menu--open');
  }
}, { capture: true });
