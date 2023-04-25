const palavras:string[] = ["Raphael","yasmin","ana","Jorge","don"];
const temMaisdeOito = (arr:string[], numero:number) : String[] => {
    const arr2 = arr.filter(element => {
        return element.length >= numero
    })
    return arr2;
}
console.log(temMaisdeOito(palavras,5))