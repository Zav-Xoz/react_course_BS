// const button = document.querySelector('#button');

// button.addEventListener('click', () => changeButton(button));

function changeButton(id) {
  const button = document.querySelector(id);
  button.innerHTML = 'Hello from Vanilla JS';
  button.className = 'green-btn';
}
