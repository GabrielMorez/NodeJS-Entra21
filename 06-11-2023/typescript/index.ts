import { imprimir } from "./function";

//TIPOS:

let number: number = 42;
let nome: string = 'Gabriel';
let booleana: boolean = true;

let arrayNumber: number[] = [12, 13, 14, 15];
let arrayString: string[] = ['teste', 'Teste2', 'teste3']

enum TipoPessoa{
    FISICA,
    JURIDICA
}

let pessoa : TipoPessoa;
pessoa = TipoPessoa.FISICA;

let qualquerCoisa: any = 50;
qualquerCoisa = 'Gabriel';
qualquerCoisa = [];

////////////////////////////////

//FUNCTION:

function somar(a: number, b: number): number {
    let soma: number = a + b
    return soma;
}

let resultado: number
resultado = somar(1,5);

////////////////////////////////

//"Objetos":

interface Pessoa {
    nome: string,
    idade: number
}

let persona: Pessoa = {
    nome: 'Gabriel',
    idade: 10
}

////////////////////////////////

imprimir();

function primeiroElemento<Generico>(array: Generico[]): Generico{
    return array[0];
}

const numeros: number[] = [10, 12, 14, 16];
let num = primeiroElemento(numeros);


const nomes: string[] = ['Gabriel', 'Lucieli', 'Clara'];
let nom = primeiroElemento(nomes);
console.log(nom);