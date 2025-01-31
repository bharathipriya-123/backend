let num=121;
let rev=0;
let temp=num;
while(num>0)
{
    let last =num%10;
    rev=(rev*10)+last;
    num=Math.floor(num/10);
}
if(temp === rev)
{
    console.log("is palindrome")
}
else{
    console.log("is not palindrome")
}