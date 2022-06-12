function a(n)
{
    var i;
    var k=[];
    for(i = 1; i <= n; i++) if(n%i==0) k.push(i);
    return k;
}
console.log(a(45));
