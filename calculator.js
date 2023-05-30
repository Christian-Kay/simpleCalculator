(function () {
    console.log("Welcome To Emmanuel's Console Calculator ")
})();

function select() {
    var prompt = require('prompt-sync')({ sigint: true });
    
    var num = parseInt(prompt('Press 1 for Addition, 2 for Subtraction, 3 for Multiplication, 4 for Division, 5 for Percentage, 6 for Pie, 7 for Square, 8 for more options '));
    if (num == 1) {
        console.log('ADDITION');
        return addition();
    } else if (num == 2) {
        console.log('SUBTRACTION');
        subtraction();
    } else if (num == 3) {
        console.log('MULTIPLICATION');
        multiplication();
    } else if (num == 4) {
        console.log('DIVISION');
        division();
     } else if (num == 5) {
        return console.log('PERCENTAGE');
    // } else if (num == 6) {
    //     console.log('PIE');
    // } else if (num == 7) {
    //     console.log('SQUARE ROOT');
    // } else if (num == 8) {
    //     console.log('SQUARE');
    // } else if (num == 9) {
    //     console.log('EXPONENTIAL');
    // } else if (num == 10) {
    //     console.log('TAN');
    // } else if (num == 11) {
    //     console.log('COS');
    // } else if (num == 12) {
    //     console.log('SIN');
    } else {
        console.log('Please Input a valid number: ');
        //  select();
    }
}
console.log(select());

// function addition() {
//     var prompt = require('prompt-sync')({ sigint: true });
//     let a = parseFloat(prompt('Enter the first number: '));
//     let b = parseFloat(prompt('Enter the second number: '));
//     console.log(a + b);
//     return console.log(quit());
// }
// function subtraction() {
//     var prompt = require('prompt-sync')({ sigint: true });
//     let a = parseFloat(prompt('Enter the first number: '));
//     let b = parseFloat(prompt('Enter the second number: '));
//     console.log(a - b);
//     console.log(quit());
// }
// function multiplication() {
//     var prompt = require('prompt-sync')({ sigint: true });
//     let a = parseFloat(prompt('Enter the first number: '));
//     let b = parseFloat(prompt('Enter the second number: '));
//     console.log(a * b);
//     console.log(quit());
// }
// function division() {
//     var prompt = require('prompt-sync')({ sigint: true });
//     let a = parseFloat(prompt('Enter the first number: '));
//     let b = parseFloat(prompt('Enter the second number: '));
//     console.log(a / b);
//     console.log(quit());
// }

// function quit() {
//     var prompt = require('prompt-sync')({ sigint: true });
//     var cont = prompt('Do you wish to contiune? press 0 to continue or 9 to quit: ');
//     if (cont == 0) {
//         select();
//     } else if (cont == 9) {
//         return 'Goodbye'
//     }
//     else {
//         console.log('Please enter a valid number');
//         return quit();
//     }
// }