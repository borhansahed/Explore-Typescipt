"use strict";
let explore = 'sahed';
explore = 4;
let user = [2, 'sahed', true];
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["medium"] = 2] = "medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
let mySize = Size.medium;
function income(money, year) {
    if (money < 2000)
        return money * year;
    return money;
}
income(2000, 2022);
