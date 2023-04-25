import { convertToObject } from "typescript";

function imprimir(nome:string):string {
    return `olá ${nome}`
}

const imprimirMaioridade = (idade:number) : boolean => {
    
    return true;
}

function imprimirUsuario(usuario:{nome:string, idade:number}): string {
    
   return usuario.idade <18 ?  `não pode netrar ${usuario.nome}`:  `pode entrar ${usuario.nome}`;
    
}
console.log(imprimirUsuario({nome:"Raphael", idade: 18}))

function imprimirArray(array : string[]):string {
    return array[0];
}
const somar = (a:number,b:number):number => a + b

console.log(somar(1,2));