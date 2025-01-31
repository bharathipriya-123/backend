function capitalize(name)
{
    return name.split(' ').map(word=>word.charAt(0).toUpperCase() + word.slice(1));
}
console.log(capitalize("hello world"))
