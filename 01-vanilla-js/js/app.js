const button = document.querySelector('#button');

button.addEventListener('click', () => changeButton(button));

function changeButton(id) {
  id.innerHTML = 'Hello from Vanilla JS';
  id.className = 'green-btn';
}
