// creating the obejct
// const person={
//     name:"bharathi",
//     age:24,
//     contact:7895565231
// }


//function declaration
// function getName()
// {
//   console.log(person.name,person.age);
// }
//function call
// getName();


//function parameter
// function getName(name)
// {
// console.log(name)
// }
//function arguments
// getName("hello");
// getName(person.name);

//function with multiple parameters
//function getPerson(name,age,contact)
// {
//     console.log(name);
//     console.log(age);
//     console.log(contact);
// }
// getPerson(person.name,person.age,person.contact);
// getPerson('bharathi',24,987456123); 

//passing object as parameter
// function getPerson(person1)
// {
//     console.log(person1.name);
//     console.log(person1.age);
//     console.log(person1.contact);
// }
// getPerson(person);
// getPerson({name:"shalini",age:22,contact:78945623});


//adding default value to the parameter
// function getPerson(person1={name:"janani",age:24})
// {
//     console.log(person1.name);
//     console.log(person1.age);
// }
// getPerson();


//rest parameter
// function getPerson(...arg)
// {
//     console.log(arg);  
// }
// getPerson(person.name,person.age,'hello');

//returning the value
// function getFullName(firstname,lastname)
// {
//     name=firstname+ ''+lastname;
//     return name;
    
// }
// let fullname=getFullName('bharathi','priya');
// console.log(fullname)

//fuction declation
// function getName()
// {
//     console.log('test');
// }
// getName();

//function expression
// const name=function()
// {
//     console.log("hello world");
// }
// name();

//function definition and funcytion expression
// function getName()
// {
//     console.log('name')
// }
// getName();

// const age=function person()
// {
//     console.log(25)
// }
// age();


// getName();
// // age();
// function getName()
// {
//     console.log('name')
// }
// // getName();

// const age=function person()
// {
//     console.log(25)
// }

// iimf
// (function(names)
// {
//     console.log(names)
// })
// ('hello');

// arrow function
// const arrowfun=()=> console.log('hello world');
// arrowfun();

// const arrow=(a,b)=> {a+b}
// console.logarrow((2,3));

// this context
// function test()
// {
//     this.name="welcome";
//     this.display=function()
//     {
//         console.log(this.name);
//     }
//     this.displayArrow = () =>
//     {
//         console.log(this.name);
//     }
// }
// const obj=new test();
// const x=obj.display;
// const y=obj.displayArrow;
// x();
// y();

//generator function
