function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  console.log(buttonCalculateImc);
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

start();
