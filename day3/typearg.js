function getTypeOfArguments(value)
{
    return typeof value;
}
console.log(getTypeOfArguments(123));
console.log(getTypeOfArguments("hiii"));
console.log(getTypeOfArguments(true));
console.log(getTypeOfArguments([]));
console.log(getTypeOfArguments({}));
console.log(getTypeOfArguments(undefined));