import { transpileModule } from "typescript";
import fs from 'fs'
const json = JSON.stringify(['Guido', 'rului', 'raphael'])

function converterJSON(info: string): unknown {
    return JSON.parse(info);
}

const JsonConvertido = converterJSON(json) as string[];
console.log(JsonConvertido[0])

let algumacoisa: number | string;
algumacoisa = 1;
algumacoisa = 'ola'

const usuario = {
    nome: "guido"
}
const usuarios = [
    {
        nome: 'raphael'
    },
    {
        nome: 'raphael'
    }
]
//exemplo melhor 
const cadastroUsuarios = (usuario: { nome: string } | { nome: string }[]): { nome: string } | { nome: string }[] => {
    
    return usuario;
}
let c = cadastroUsuarios(usuarios)
console.log(c)


const validacao = (info: {nome: string , idade : number , valido?: boolean}): boolean =>
 {
    let valido: boolean = false
    if(!info.valido){
        info.valido =  false ? valido = false : valido = true
    }
    else{
        info.idade < 18 ? valido = false : valido = true
    }
    return valido
}

const validacao2 = validacao({nome:"raphael",idade : 14})
console.log(validacao2)


let informeções : [string,number,boolean?] ;

informeções = ['raphael',12]

const cadastroNumero = ( numero : string | number)  =>{
    if (typeof  numero == "string" ) {
       numero = numero.toUpperCase()
    }else{
        numero = numero.toFixed(2)
    }
    console.log(numero)
}
cadastroNumero(897878876);


/// criando tipos com type , parece muito uma mini clase
type Usuario =  {
    nom: string,
    idade:number,
    cpf?:string,
    dataNascimento:Date
}
const validaCpf = (user : Usuario): boolean => {
    if(!user.cpf){
        return false
    }
    return true
}

// tipos literais

type Transacao = {
    cpf: number;
    cvv: Date;
    metodo : "credito" | "Debito"
}


const writeFile = (dados : any) : void => {
    fs.writeFileSync('./bd.json', JSON.stringify(dados));
     
}
