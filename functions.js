//This function takes a number(num) as an argument.
//It calculates and returns the square of the input number by multiplying itself(num*num)
function square(num) {
    return num*num;
}

function squareNumbers(){
    for(let a = 1; a <= 10; a ++) {
        let squared = square(a)
        console.log("The square of" + a + " is:" + squared);
    }
    
}
squareNumbers();