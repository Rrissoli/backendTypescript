let arr:number[] = [2,4,6,8];

const allEven = (arr:number[]) : String => {
    
    const isEven: boolean = arr.every(element => {
        return element %2 == 0
    })
    if(isEven){
        return "array valido"
    }
        return "array invalido"
    
}
console.log(allEven(arr))