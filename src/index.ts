// arrays 
// let numbers:number[] = [1,2,3];

// numbers.forEach(n=>n.) // from . you get code completion from ide

//tuples -> key value pairs
let user : [number,string] = [1,'varun'];
// user[1].
// user.push(1);

//enums
// list of related constants 
//PascalCase
// enum Size { Small , Medium , Large};
// enum Size { Small='s' , Medium='m' , Large='l'};
const enum Size { Small = 1 , Medium , Large};

let mySize: Size = Size.Medium;

console.log("Mysize ",mySize);


//functions

function calculatTax(income:number, taxYear:number): number{
    if(taxYear<2022)
        return income * 1.2;
    return income * 1.3
}

calculatTax(23000,2022);