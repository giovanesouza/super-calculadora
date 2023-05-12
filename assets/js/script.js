// Pegar os elementos HTML pelo DOM

let resultadoSoma = document.getElementById("resultadoSoma");

let resultadoSubA = document.getElementById("resultadoSubA");
let resultadoSubB = document.getElementById("resultadoSubB");

let resultadoMult = document.getElementById("resultadoMult");

let resultadoDivA = document.getElementById("resultadoDivA");
let resultadoDivB = document.getElementById("resultadoDivB");

let resultadoPotA = document.getElementById("resultadoPotA");
let resultadoPotB = document.getElementById("resultadoPotB");

let resultadoRaiz = document.getElementById("resultadoRaiz");
let resultadoRaizB = document.getElementById("resultadoRaizB");

let resultadoFatA = document.getElementById("resultadoFatA");
let resultadoFatB = document.getElementById("resultadoFatB");

let resultadoPorcentagem = document.getElementById("resultadoPorcentagem");
let resultadoPorcentagemB = document.getElementById("resultadoPorcentagemB");

let media = document.getElementById("media");

// ADIC
resultadoSoma.innerHTML = 0;

// SUB
resultadoSubA.innerHTML = 0;
resultadoSubB.innerHTML = 0;

// MULT
resultadoMult.innerHTML = 0;

// DIVISÃO
resultadoDivA.innerHTML = 0;
resultadoDivB.innerHTML = 0;

// POTENCIAÇÃO
resultadoPotA.innerHTML = 0;
resultadoPotB.innerHTML = 0;

// RAIZ
resultadoRaiz.innerHTML = 0;
resultadoRaizB.innerHTML = 0;

// FATORIAL
resultadoFatA.innerHTML = 0;
resultadoFatB.innerHTML = 0;

// PORCENTAGEM
resultadoPorcentagem.innerHTML = 0;
resultadoPorcentagemB.innerHTML = 0;

// MÉDIA
media.innerHTML = 0;

// => Fazer os cálculos
function calcularSoma(a, b) {
  return a + b;
}

// SUB
const calcularSubA = (a, b) => a - b;
const calcularSubB = (a, b) => b - a;

// MULTIPLICAÇÃO
const calcularMult = (a, b) => b * a;

// DIVISÃO
const calcularDivA = (a, b) => a / b;
const calcularDivB = (a, b) => (b / a).toFixed(2);

// POTENCIAÇÃO
const calcularPotA = (a, b) => a ** b;
const calcularPotB = (a, b) => b ** a;

// RAÍZ
const calcularRaiz = (a) => Math.sqrt(a).toFixed(2);
const calcularRaizB = (b) => Math.sqrt(b).toFixed(2);

// FATORIAL
// DE A
function calcularFatA(a) {
  var result = a;

  if (a === 0 || a === 1) return 1;

  while (a > 1) {
    a--;
    result *= a;
  }

  return result;
}

// DE B
function calcularFatB(b) {
  var result = b;

  if (b === 0 || b === 1) return 1;

  while (b > 1) {
    b--;
    result *= b;
  }

  return result;
}


// PORCENTAGEM
const calcularPorcentagem = (a, b) => `${((b / a) * 100).toFixed(2)}%`;
const calcularPorcentagemB = (a, b) => `${((a * 100) / b).toFixed(2)}%`;

// MÉDIA
const calcularMedia = (a, b) => (a + b) / 2;

// Criar a função para executar os cálculos
function calcular() {
  // Não passa nada na função, pq pega os valores dinamicamente

  let inputA = document.getElementById("primeiroNumero").value;

  let inputB = document.getElementById("segundoNumero").value;

  let a = parseFloat(inputA);
  let b = parseFloat(inputB);

  // ADI
  resultadoSoma.innerHTML = calcularSoma(a, b);

  // SUB
  resultadoSubA.innerHTML = calcularSubA(a, b);
  resultadoSubB.innerHTML = calcularSubB(a, b);

  // MULTIPLICAÇÃO
  resultadoMult.innerHTML = calcularMult(a, b);

  // DIVISÃO
  resultadoDivA.innerHTML = calcularDivA(a, b);
  resultadoDivB.innerHTML = calcularDivB(a, b);

  //   POTENCIAÇÃO
  resultadoPotA.innerHTML = calcularPotA(a, b);
  resultadoPotB.innerHTML = calcularPotB(a, b);

  //   RAÍZ
  resultadoRaiz.innerHTML = calcularRaiz(a);
  resultadoRaizB.innerHTML = calcularRaizB(b);

  // FATORIAL
  resultadoFatA.innerHTML = calcularFatA(a);
  resultadoFatB.innerHTML = calcularFatB(b);

  //   PORCENTAGEM
  resultadoPorcentagem.innerHTML = calcularPorcentagem(a, b);
  resultadoPorcentagemB.innerHTML = calcularPorcentagemB(a, b);

//   MÉDIA
  media.innerHTML = calcularMedia(a, b);
}
