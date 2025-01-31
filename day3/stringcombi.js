function stringcombination(string)
{
    let result=[];
    for(let i=0;i<= string.length;i++)
    {
        for(let j=0;j<=string.length;j++)
        {
            result.push(string.slice(i,j))
        }
    }
    return result;
}
console.log(getCombinations("abc"));
