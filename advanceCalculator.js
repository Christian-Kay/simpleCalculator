(function () {
    console.log("Welcome To Emmanuel's Console Calculator ")
})();
const prompt = require('prompt-sync')();
const math = require('mathjs');

select();

function select() {
    console.log('You can select between addition,subtraction,division,multiplication,percentage,pi,square,square-root,exponential,tan,cos or sin')
    const operation = prompt('What Operation would you like to Perform? ').toLowerCase();
    switch (operation) {
        case 'addition': {
            console.log('You Want To Add')
            addition();
            break
        }
        case 'subtraction': {
            console.log('You Want To Subtract')
            subtraction();
            break
        }
        case 'multiplication': {
            console.log('You Want To Multiply')
            multiplication();
            break
        }
        case 'division': {
            console.log('You Want To Divide')
            division();
            break
        }
        case 'percentage': {
            console.log('You Want To Find The Percentage')
            percentage();
            break
        }
        case 'pi': {
            console.log('pi Operations')
            pi();
            break
        }
        case 'square': {
            console.log('You Want To Find the Square')
            square();
            break
        }
        case 'square-root': {
            console.log('You Want To Find The Square-root')
            squareRoot();
            break
        }
        case 'exponential': {
            exponential();
            console.log('You Want To Find The Exponential Value')
            break
        }
        case 'tan': {
            console.log('You Want To Find The Tan Value')
            tan();
            break
        }
        case 'cos': {
            console.log('You Want To Find The Cos Value')
            cos();
            break
        }
        case 'sin': {
            console.log('You Want To Find The Sin Value')
            sin();
            break
        }
        default: {
            console.log('please enter a valid input');
            select();
            break
        }
    }
}
function addition() {
    let a = parseFloat(prompt('Enter the first number: '));
    let b = parseFloat(prompt('Enter the second number: '));
    result = a + b
    console.log(`${a} + ${b} = ${result}`);
    return console.log(quit());
}
function subtraction() {
    let a = parseFloat(prompt('Enter the first number: '));
    let b = parseFloat(prompt('Enter the second number: '));
    result = a - b
    console.log(`${a} - ${b} = ${result}`);
    return console.log(quit());
}
function multiplication() {
    let a = parseFloat(prompt('Enter the first number: '));
    let b = parseFloat(prompt('Enter the second number: '));
    result = a * b
    console.log(`${a} x ${b} = ${result}`);
    return console.log(quit());
}
function division() {
    let a = parseFloat(prompt('Enter the first number: '));
    let b = parseFloat(prompt('Enter the second number: '));
    result = a / b
    console.log(`${a} / ${b} = ${result}`);
    return console.log(quit());
}
function percentage() {
    let input = prompt('do you want to find the % of a decimal or fraction? input d for decimal or f for fraction: ').toLowerCase();
    if (input == 'd') {
        let num = parseFloat(prompt('Enter the the number: '));
        result = num * 100;
        console.log(`The percentage of ${num} is ${result}%`)
        return quit();
    } else if (input == 'f') {
        let a = parseFloat(prompt('Enter the numerator: '));
        let b = parseFloat(prompt('Enter the denominator: '));
        result = (a / b) * 100;
        console.log(`The percentage of ${a}/${b} is ${result}%`)
        return quit();
    } else {
        console.log('Please enter a valid input, d for decimal or f for fraction');
        return percentage();
    }
}
function pi() {
    let input = prompt('press 1 to solve for circumfrence or 2 for area of a circle: ')
    if (input == 1) {
        console.log('You want to find the circumfrence of a circle')
        console.log('pi = 22/7 = 3.142');
        let r = parseFloat(prompt('Enter the radius(cm): '));
        result = 2 * 3.142 * r;
        console.log(`The Circumference of the circle is ${result}cm`)
        quit();
    } else if (input == 2) {
        console.log('You want to find the area of a circle')
        console.log('pi = 22/7 = 3.142');
        let r = parseFloat(prompt('Enter the radius(cm): '));
        result = 3.142 * r * r;
        console.log(`The Area of the circle is ${result}cm²`)
        quit();
    } else {
        console.log('Please select a number between 1 or 2');
        pi();
    }
}
function square() {
    let input = prompt('do you want to take the square of a decimal/whole number or fraction? input d for decimal/whole number or f for fraction: ').toLowerCase();
    if (input == 'd') {
        let num = parseFloat(prompt('Enter the the number: '));
        result = num ** 2;
        console.log(`The square of ${num} is ${result}`)
        return quit();
    } else if (input == 'f') {
        let a = parseFloat(prompt('Enter the numerator: '));
        let b = parseFloat(prompt('Enter the denominator: '));
        result = (a / b) ** 2;
        console.log(`The square of ${a}/${b} is ${result}`)
        return quit();
    } else {
        console.log('Please enter a valid input, d for decimal/whole number or f for fraction');
        return square();
    }
}
function squareRoot() {
    let input = prompt('do you want to take the square-root of a decimal/whole number or fraction? input d for decimal/whole number or f for fraction: ').toLowerCase();
    if (input == 'd') {
        let num = parseFloat(prompt('Enter the the number: '));
        result = math.sqrt(num);
        console.log(`The square-root of ${num} is ${result}`)
        return quit();
    } else if (input == 'f') {
        let a = parseFloat(prompt('Enter the numerator: '));
        let b = parseFloat(prompt('Enter the denominator: '));
        result = math.sqrt((a / b));
        console.log(`The square of ${a}/${b} is ${result}`)
        return quit();
    } else {
        console.log('Please enter a valid input, d for decimal/whole number or f for fraction');
        return squareRoot();
    }
}
function exponential() {
    let input = prompt('do you want to take the exponent of a decimal/whole number or fraction? input d for decimal/whole number or f for fraction: ').toLowerCase();
    if (input == 'd') {
        let num = parseFloat(prompt('Enter the the base number: '));
        let x = parseFloat(prompt('Enter the Exponent: '))
        result = num ** x;
        console.log(`The Exponential value is: ${result}`)
        return quit();
    } else if (input == 'f') {
        let a = parseFloat(prompt('Enter the base numerator: '));
        let b = parseFloat(prompt('Enter the base denominator: '));
        let c = parseFloat(prompt('Enter the Exponent: '))
        console.log(`The Exponential value is ${(a ** c)}/${b ** c}`)
        return quit();
    } else {
        console.log('Please enter a valid input, d for decimal/whole number or f for fraction');
        return exponential();
    }
}
function tan() {
    let a = parseFloat(prompt('Enter the number: '))
    result = math.tan(a);
    console.log(`Tan ${a} = ${result}rad`);
    return quit();
}
function cos() {
    let a = parseFloat(prompt('Enter the number: '))
    result = math.cos(a);
    secondResult = result * 57.296
    console.log(`Cos ${a} = ${result}rad`);
    return quit();
}
function sin() {
    let a = parseFloat(prompt('Enter the number: '))
    result = math.sin(a);
    console.log(`Sin ${a} = ${result}rad`);
    return quit();
}
function quit() {
    var cont = prompt('Do you wish to contiune? press 0 to continue or 9 to quit: ');
    if (cont == 0) {
        select();
    } else if (cont == 9) {
        return 'Goodbye';
    }
    else {
        console.log('Please enter a valid number');
        quit();
    }
}