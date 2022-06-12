function a(i,j)
{
    var x=[];
    for(i; i <= j; i++) if(i % 3 != 0 && i % 5 != 0 && i % 7 != 0) x.push(i);
    return x;
}
console.log(a(5,10))
console.log(a(5,15))
