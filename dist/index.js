"use strict";
// arrays 
// let numbers:number[] = [1,2,3];
Object.defineProperty(exports, "__esModule", { value: true });
// numbers.forEach(n=>n.) // from . you get code completion from ide
//tuples -> key value pairs
let user = [1, 'varun'];
// user[1].
// user.push(1);
//enums
// list of related constants 
//PascalCase
// enum Size { Small , Medium , Large};
// enum Size { Small='s' , Medium='m' , Large='l'};
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
console.log("Mysize ", mySize);
//# sourceMappingURL=index.js.map