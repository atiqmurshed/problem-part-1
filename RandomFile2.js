let lottery = [];

while(lottery.length < 5){
    let RandomNum = Math.floor(Math.random() * 36) + 1;
    if(!lottery.includes(RandomNum)){
        lottery.push(RandomNum);
    };
};

console.log(lottery);

