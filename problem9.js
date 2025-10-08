//problem ---> 9;
let char = '5';

// Check if it's uppercase or lowercase
let result = (char >= 'A' && char <= 'Z') 
    ? console.log('Uppercase')
    : (char >= 'a' && char <= 'z') 
        ? console.log('Lowercase') 
        : console.log('Not a letter');