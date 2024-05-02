let counter = 0;

function updateCounter() {
  document.getElementById('counter').innerText = counter;
}

document.getElementById('mais-um').addEventListener('click', () => {
  counter += 1;
  updateCounter();
});

document.getElementById('menos-um').addEventListener('click', () => {
    counter -= 1;
    updateCounter();
  });

document.getElementById('mais-dez').addEventListener('click', () => {
  counter += 10;
  updateCounter();
});

document.getElementById('menos-dez').addEventListener('click', () => {
  counter -= 10;
  updateCounter();
});

document.getElementById('zerar').addEventListener('click', () => {
  counter = 0;
  updateCounter();
});