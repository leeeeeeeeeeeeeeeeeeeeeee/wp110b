function a(n)
{
   var i,j = 0;
   for (i = 2;i < n;i++)
    {
        if(n % i == 0) j = 1;
        
    }
    if(j == 0) return true;
    if(j == 1) return false;
}
console.log(a(17))
console.log(a(21))
