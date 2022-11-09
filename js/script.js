// IMC DATA 
const data  = [
{
  min:0,
  max:18.4,
  classification: "Menor que 18,5", 
  info: "Magreza",
  obesity: "0",
},
{
  min: 18.5, 
  max: 24.9,
  classification: "Entre 18,5 e 24,9", 
  info: "Normal", 
  obesity: "0"
},
{
  min: 25, 
  max: 29.9,
  classification: "Entre 25,0 e 29,9", 
  info: "Sobrepeso", 
  obesity: "I"
},
{
  min: 30, 
  max: 39.9,
  classification: "Entre 30,0 e 39,9", 
  info: "Obesidade", 
  obesity: "II"
},
{
  min: 40, 
  max: 99,
  classification: "Maior que 40,0", 
  info: "Obesidade grave", 
  obesity: "III",
},
];

//===========================SELEÇÃO DE ELEMENTOS==========================
const imcTable = document.querySelector("#imc__table");

const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const calcBtn = document.querySelector("#calc__btn");
const clearBtn = document.querySelector("#clear__btn");

const calcContainer = document.querySelector("#calc__container"); 
const resultContainer = document.querySelector("#result__container");

const imcNumber = document.querySelector("#imc__number span");
const imcInfo = document.querySelector("#imc__info span");

const backBtn = document.querySelector("#back__btn"); //Ação de voltar 



//===========================FUNÇÕES=======================================
function createTable(data) {
  data.forEach((item) => {

    const div = document.createElement("div");
    div.classList.add("table__data");

    const classification = document.createElement("p"); // inserir os parágrafos com informações dentro das DIV
    classification.innerText = item.classification; 

    const info = document.createElement("p"); // inserir os parágrafos com informações dentro das DIV
    info.innerText = item.info; 

    const obesity = document.createElement("p"); // inserir os parágrafos com informações dentro das DIV
    obesity.innerText = item.obesity; 

    div.appendChild(classification); // incluindo na DIV
    div.appendChild(info);           // incluindo na DIV
    div.appendChild(obesity);        // incluindo na DIV

    // Colocando na tabela cada uma delas
    imcTable.appendChild(div);
  })
}

function cleanInputs() { // Função para limpar resultado
  heightInput.value = "";
  weightInput.value = "";

  imcNumber.classList = "";
  imcInfo.classList = "";
}

function validDigits(text) { // Função para validação de digitos
  return text.replace(/[^0-9,]/g, ""); //Área de digitos permitidos
}

function calcImc(weight, height) {
  const imc = (weight / (height * height)).toFixed(1); 

  return imc;
}

function showOrHideResults() {
  calcContainer.classList.toggle("hide"); //Tem hide tira, não tem hide coloca
  resultContainer.classList.toggle("hide");
}

//===========================INICIALIZAÇÃO=================================

// iniciando o createTable
createTable(data);

//===========================EVENTOS=======================================
[heightInput, weightInput].forEach((el) => {
  el.addEventListener("input", (e) =>{ //input = evento para detectar notificações

    const updateValue = validDigits(e.target.value);

    e.target.value = updateValue;
  }) 
})

calcBtn.addEventListener("click", (e) => {

  e.preventDefault();

  const weight = +weightInput.value.replace(",", "."); // converter as vírgulas em ponto 
  const height = +heightInput.value.replace(",", ".") ;// converter as vírgulas em ponto 

  if(!weight || !height) return;


  const imc = calcImc(weight, height);

  let info

  data.forEach((item) => {
    if(imc >= item.min && imc <= item.max) {
      info = item.info;
    }
  });


  if (!info) return;

  imcNumber.innerText = imc; 
  imcInfo.innerText = info; 

  switch(info) {
    case "Magreza":
      imcNumber.classList.add("low");
      imcInfo.classList.add("low");
      break;

    case "Normal":
      imcNumber.classList.add("good");
      imcInfo.classList.add("good");
      break;

    case "Sobrepeso":
      imcNumber.classList.add("low");
      imcInfo.classList.add("low");
      break;

    case "Obesidade":
      imcNumber.classList.add("medium");
      imcInfo.classList.add("medium");
      break;

    case "Obesidade grave":
      imcNumber.classList.add("high");
      imcInfo.classList.add("high");
      break;


  }

  showOrHideResults(); //Chamada da função

});

clearBtn.addEventListener("click", (e) => { // Criação do evento ao clicar no botão
  e.preventDefault(); //Para de recarregar e enviar formulário
  
  cleanInputs(); // Chamada da função

});

// ====================Ação de voltar===================================

backBtn.addEventListener("click", () => {
  cleanInputs();
  showOrHideResults();
});