function a(n)
{
    if(n==0) return 0;
    else if(n==1) return 1;
    else return a(n-2)+a(n-1);
}
console.log(a(7));
