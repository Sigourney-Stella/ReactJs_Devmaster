//các tham số còn lại
function sum(num1, num2, ...other){
    console.log(num1);
    console.log(num2);
    other.forEach(element => {
        console.log(element);
    })
}

sum(1,2,3,4,5,6);
console.log("=======================");
sum(10,20,34,22,34,55,677)
console.log("=======================");
sum(10,20)