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

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');

  imcResult.textContent = formattedImc;
}
// Aula 3.2.3. IMC - parte 3 -  10:18

function calculateImc(weight, height) {
  return weight / (height * height);
}

start();
