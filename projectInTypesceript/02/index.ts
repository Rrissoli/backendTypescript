const nomes:string[] = ["Raphael","yasmin","ana","Jorge","don"];

const  pegaNome = (arr:string[], nome:string) : String => {
let posicao:number = arr.indexOf(nome);
if(posicao){
    return "n encontrado"
}
posicao = posicao + 1;
return `esta na posição ${posicao}`
}
console.log(pegaNome(nomes,"Raphael"))
