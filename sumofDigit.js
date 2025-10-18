function sumOfDigit(num) {
    let sum = 0;

    while(num > 0){
        let digit = num % 10;
        sum = digit + sum;
        num = Math.floor(num / 10)
    }
    return sum;
}
console.log(sumOfDigit(141342))