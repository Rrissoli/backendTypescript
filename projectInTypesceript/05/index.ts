const numeros:number[] = [1,2,3,4,5,6,7,8,9];

const  getEven = (arr:number[]) : number[] => {
   let arr2:number[] = arr.filter(i=>{
        return i%2 == 0 
    })
    return arr2;   
}
console.log(getEven(numeros))