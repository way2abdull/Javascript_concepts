function sum(a, b, c) {
    return a + b + c;
}
sum(1,2,3); // 6

//CAN BE TRANSFORMED INTO 

function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}
console.log(sum(1)(2)(3)) 

//CAN BE WRITTEN AS

const sum1 = sum(1);
const sum2 = sum1(2);
const result = sum2(3);
console.log(result);