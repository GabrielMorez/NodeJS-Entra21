"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const function_1 = require("./function");
//TIPOS:
let number = 42;
let nome = 'Gabriel';
let booleana = true;
let arrayNumber = [12, 13, 14, 15];
let arrayString = ['teste', 'Teste2', 'teste3'];
var TipoPessoa;
(function (TipoPessoa) {
    TipoPessoa[TipoPessoa["FISICA"] = 0] = "FISICA";
    TipoPessoa[TipoPessoa["JURIDICA"] = 1] = "JURIDICA";
})(TipoPessoa || (TipoPessoa = {}));
let pessoa;
pessoa = TipoPessoa.FISICA;
let qualquerCoisa = 50;
qualquerCoisa = 'Gabriel';
qualquerCoisa = [];
////////////////////////////////
//FUNCTION:
function somar(a, b) {
    let soma = a + b;
    return soma;
}
let resultado;
resultado = somar(1, 5);
let persona = {
    nome: 'Gabriel',
    idade: 10
};
////////////////////////////////
(0, function_1.imprimir)();
function primeiroElemento(array) {
    return array[0];
}
const numeros = [10, 12, 14, 16];
let num = primeiroElemento(numeros);
const nomes = ['Gabriel', 'Lucieli', 'Clara'];
let nom = primeiroElemento(nomes);
console.log(nom);
