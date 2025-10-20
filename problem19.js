//problem ---> 19;

let armstrong = 153;

let digit1 = Math.floor(armstrong / 100); // 1
let digit2 = Math.floor((armstrong % 100) / 10); //  5
let digit3 = armstrong % 10; // 3

let sum = digit1 ** 3 + digit2 ** 3 + digit3 ** 3;
if (sum === armstrong) {
    console.log("The Number is armstrong");
}
else {
    console.log("Not Armstrong");
}

