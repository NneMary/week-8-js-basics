//Create a function that checks if the input is an even number.

function evenNumber(number) {
    if(number % 2 === 0) {
        return 'Even Number';
    }else{
        return 'odd number';
    }
}

console.log(evenNumber(8));


//Create a function that prints to the console n1 to n2. 
//where n1 is the first input/parameter and n2 is the second input/parameter

function numbers(n1, n2) {
    let x = 2;
    let y = 4;

    if(n1 == n2) {
        return 'n1 = n2'
    }else {
        return 'n1 and n2'
    }
}
console.log(numbers(2,4));


//Create a function that sum the values in-between two numbers. 
//eg calcFunc(1,3) returns 6. ie. 1+2+3.

function sumNumbers( arr ) {
    if(arr[0] > arr[1])
        arr.sort((a, b) => a - b)

    let sum = 0;

    for(let i = arr[0]; i <= arr[1]; i++) {
        sum += i;
    
    } return sum;
}

console.log(sumNumbers([5,1]))

    