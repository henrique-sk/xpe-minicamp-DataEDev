function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handdleButtonClick);
  // buttonCalculateImc.textContent = 'Modifiquei';

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  // para já mostrar o valor a medida que altera um dos dados
  inputWeight.addEventListener('input', handdleButtonClick);
  inputHeight.addEventListener('input', handdleButtonClick);

  handdleButtonClick(); // já inicia como se tivesse sido clicado
}

function handdleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');
  var imcRange = document.querySelector('#imc-range');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');

  var range = rangeImc(imc);

  imcResult.textContent = formattedImc;
  imcRange.textContent = range;
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function rangeImc(imc) {
  if (20 < imc < 30) {
    return 'Its OK!!';
  }
}

start();
