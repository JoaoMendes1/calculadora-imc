// IMC DATA 
const data  = [
{
  min:0,
  max:18.4,
  classification: "Menor que 18,5", 
  info: "Magro",
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
    div.appendChild(info);
    div.appendChild(obesity);

    // Colocando na tabela cada uma delas
    imcTable.appendChild(div);
  })
}

//===========================INICIALIZAÇÃO=================================

// iniciando o createTable
createTable(data);

//===========================EVENTOS=======================================