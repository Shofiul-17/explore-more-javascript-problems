
// Normal way Input integer as a parameter
/* function add(num1, num2){
    return num1 + num2;
}

const result = add(10, 20);
console.log(result); */



// Mistakenly Input integer as a parameter
/* function add(num1, num2){
    return num1 + num2;
}

const result = add(10, '20');
console.log(result); */



// Correct way to input integer as a parameter with typeof 
/* function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please enter valid number!';
    }
    return num1 + num2;
}

const result = add(10, '20');
console.log(result); */




// Correct way to input integer as a parameter with typeof 
/* function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please enter valid number!';
    }
    return num1 + num2;
}

const result = add('30', 20);
console.log(result); */




// Correct way to input integer as a parameter with typeof 
function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please enter valid number!';
    }
    return num1 + num2;
}

const result = add(false, 20);
console.log(result);




//  Multiplication error problem #1
/* function multiply(num01, num02){
    return num01 * num02;
}

const output = multiply(50 * 20);
console.log(output); */



//  Multiplication error problem #2
/* function multiply(num01, num02){
    console.log(num01, num02);
    return num01 * num02;
}

const output = multiply(50 * 20);
console.log(output); */



//  Multiplication error problem #3
/* function multiply(num01, num02){
    console.log(num01, num02);
    return num01 * num02;
}

const output = multiply(50 + 20);
console.log(output); */



//  Correct way Multiplication 
function multiply(num01, num02){
    console.log(num01, num02);
    return num01 * num02;
}

const output = multiply(50, 20);
console.log(output);



