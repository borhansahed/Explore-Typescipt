// object


const person:{
    name: string,
    age: number, 
    Is_married: boolean,
} = {
    name:'sahed', 
    age: 21,
    Is_married:true,
}

console.log(person.Is_married)

//array 
// you cannot use map on string Array .
// const number: number[] = [3,3,5]

//  mixed of array called tuple
// const number1:[ number, string , boolean] = [3,'sahed', true]

// function type

let add: (a: number , b: number, c: string) => number | string;

add = (a: number , b: number , c: string ) =>{
    if(c === 'true'){
       return a+b;  
    }
    else{
      return 'sorry';
    }
   

}
const sub = add(3, 3 , 'false')
console.log(sub)