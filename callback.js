let addition = function(x, y)
{
    return x + y;
}

let multiplication = function(x, y)
{
    return x * y;
}

let division = function(x, y)
{
    return x / y;
}

let calculator = function(num1, num2, callBack)
{
    return callBack(num1, num2)
}


console.log(calculator(10, 5, multiplication))
console.log(calculator(10, 5, division))
console.log(calculator(10, 5, addition))
