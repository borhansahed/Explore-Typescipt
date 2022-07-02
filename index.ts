      
         // Build in types of typescript

// 1. any means you can add type of data
let explore: any = 'sahed'
explore = 4;

// 2. tuple is used for mixed element and array
let user: [number , string , boolean] = [2, 'sahed', true]

// Eunms example :
 enum Size {small=1, medium , large }

 let mySize = Size.medium
 
 // function //
 // void means function don't return 
// if you want to return in your function , you will be writing data type after arguments;
 function income ( money: number , year:number ): number {
    
   if(money < 2000)
   return money *year
   return money;

 }
 income(2000, 2022 )

 
