
function reverse(num)
{
    return parseInt(num.toString().split('').reverse().join(''))
}
console.log(reverse(123456))