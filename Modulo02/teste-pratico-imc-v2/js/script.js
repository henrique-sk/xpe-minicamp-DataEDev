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
  var range = '';
  if (imc > 16 && imc <= 16.9) {
    range = 'Muito abaixo do peso.';
  } else if (imc > 16.9 && imc <= 18.4) {
    range = 'Abaixo do peso.';
  } else if (imc > 18.4 && imc <= 24.9) {
    range = 'Peso normal.';
  } else if (imc > 24.9 && imc <= 29.9) {
    range = 'Acima do peso.';
  } else if (imc > 29.9 && imc <= 34.9) {
    range = 'Obesidade grau I.';
  } else if (imc > 34.9 && imc <= 40) {
    range = 'Obesidade grau II.';
  } else if (imc > 40) {
    range = 'Obesidade grau III.';
  } else {
    range = 'inválido.';
  }
  return range;
}

start();
