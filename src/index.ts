function add(a: number, b: number): number {
    return a + b;
};

function subtract(a: number, b: number): number {
    return a - b;
};

function mult(a: number, b: number): number {
    return a * b;
};

function div(a: number, b: number): number {
    return a / b;
};

let op: (x: number, y: number) => number;

op = add;
console.log(op(7, 10));

op = subtract;
console.log(op(7, 10));

op = mult;
console.log(op(7, 10));

op = div;
console.log(op(7, 10));

function mathOperation(x: number, y: number, operation: (a: number, b: number) => number): number {

    let result = operation(x, y);
    return result;
}

let operationFunc: (x: number, y: number) => number;

operationFunc = function (a: number, b: number): number {
    return a + b;
}
console.log(mathOperation(3, 5, operationFunc));

operationFunc = function (a: number, b: number): number {
    return a - b;
}
console.log(mathOperation(3, 5, operationFunc));

operationFunc = function (a: number, b: number): number {
    return a * b;
}
console.log(mathOperation(3, 5, operationFunc));

operationFunc = function (a: number, b: number): number {
    return a / b;
}
console.log(mathOperation(3, 5, operationFunc)); 