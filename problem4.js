 //problem ---> 4;

let x = 5;
let y = 5
let z = 2;

//if((x > y && z < x) ? (y > x && z < y) : (z > x && y < z) )

if((x > y && z < x) || (x >= y && x >= z)){
    console.log('largest value of x' , x)
}
else if(y > x && z < y){
    console.log('Largest value of y', y);
}
else if(z > x && y < z){
    console.log('Largest value of z', z);
}
else{
    console.log('All declare value are same');
}