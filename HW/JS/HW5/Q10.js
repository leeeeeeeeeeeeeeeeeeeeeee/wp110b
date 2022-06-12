function a(f,n,m)
{
    var i=0;
    var j;
    for(j = n; j < m; j = j + 0.0001) i = i + f(j) * 0.0001;
    return i;
}
console.log(a((x)=>x*x,0,1));
