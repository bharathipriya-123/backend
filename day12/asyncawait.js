
//async always retuen a promise
// async function test()
// {
//     return 'hello'
// }
// console.log(test());


let reachA=new Promise((resolve,rejected)=>
{
    const reached=true
    if(reached)
    {
        setTimeout((resolve) => {
            console.log("hello")
        }, 3000);
    }
    else{
        console.log("rejected")
    }
})

async function test()
{
    try{
        console.log("welcome")
        res = await reachA
        console.log(res);
        console.log('byeee')
    }
    catch(err){
        console.log(err);
    }
   
}
test()