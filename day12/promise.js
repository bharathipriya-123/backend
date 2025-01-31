let reached=new Promise((resolve,reject)=>
{
    const reached =true
    if(reached)
    {
        setTimeout((resolve) => {
            console.log("hoo")
        }, 3000);
    }
    else{
        console.log("rejected")
    }
})