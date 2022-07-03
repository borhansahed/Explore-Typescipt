// object
var person = {
    name: 'sahed',
    age: 21,
    Is_married: true
};
console.log(person.Is_married);
//array 
// you cannot use map on string Array .
// const number: number[] = [3,3,5]
//  mixed of array called tuple
// const number1:[ number, string , boolean] = [3,'sahed', true]
// function type
var add;
add = function (a, b, c) {
    if (c === 'true') {
        return a + b;
    }
    else {
        return 'sorry';
    }
};
var sub = add(3, 3, 'false');
console.log(sub);
