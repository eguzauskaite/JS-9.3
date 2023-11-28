const vardasInput = document.getElementById('vardas');

vardasInput.addEventListener('input', function() {
  const vardas = vardasInput.value.trim();

  if (vardas.length <= 2) {
    document.body.style.backgroundColor = 'red';
  } else {
    document.body.style.backgroundColor = 'green';
  }
});