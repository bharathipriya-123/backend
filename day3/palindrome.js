function palindrome(num)
{
 let num1=num.toString();
 let reverses=num1.split('').reverse().join('');
 return num1 ===reverses
}
console.log(palindrome('madam'));
console.log(palindrome('121'));
console.log(palindrome('ma'));