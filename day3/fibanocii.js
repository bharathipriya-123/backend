let n = 50; 
let a = 0, b = 1; 
let i = 1;

while (i <= n) {
    let c = a + b; 
    console.log("fibanocci series " + a);
    a = b; 
    b = c; 
    i++; 
}
