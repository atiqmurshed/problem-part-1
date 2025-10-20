


function CountUpperCase(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char >= "A" && char <= "Z") {
            count++;
        }
    };
    return count;
};

console.log(CountUpperCase("ProGraMin"));
