function largestWord(name)
{
  let word=name.split(' ');
  return word.reduce((largest,count1)=>count1.length > largest.length ? count1:largest, "")
}
console.log(largestWord("welocme india hii"))