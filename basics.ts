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

// console.log(person.Is_married)

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
// console.log(sub)


//class

class Person {
 name: string;
 age: number;

 constructor(n: string, a: number) {
    
        this.name= n;
        this.age = a;
    
 }
 role(){
    console.log(`${this.name} is a hacker`)
 }
}

const person1 = new Person('sahed', 30)

person1.role()

// Generics
// everyone use <T> as a generics type. Basically generics is a variable . 
//we can also give <T> as specific type. ex: <T extends object> or <T extends { name: string, age: number}> which means T can only extend the objects value.
//this is use for accessing object.

function add2<T>(obj: T) {
 const id = Math.floor(Math.random() * 100)
 return {...obj , id}
}

const argument = add2({
    name:'sahed',
    age:30
})
console.log(argument.age)
//without generics iam cannot access object without id .
// with generics i can access anything from objects