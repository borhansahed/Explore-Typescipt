// Build in types of typescript
// 1. any means you can add type of data
var explore = 'sahed';
explore = 4;
// 2. tuple is used for mixed element and array
var user = [2, 'sahed', true];
// Eunms example :
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["medium"] = 2] = "medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
var mySize = Size.medium;
// function //
// void means function don't return 
// if you want to return in your function , you will be writing data type after arguments;
function income(money, year) {
    if (money < 2000)
        return money * year;
    return money;
}
income(2000, 2022);
console.log('sahed')