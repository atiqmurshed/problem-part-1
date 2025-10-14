//problem 20 count a string value; 
let str = 'hello';
console.log(str.length);

// problem 21/ count a vowels;
let sim = "programmingE";
let vowel = 'aeiouAEIOU';
 let count = 0;
for(a of sim){
    if(vowel.includes(a)){
        count++
    }
}
console.log(count);
