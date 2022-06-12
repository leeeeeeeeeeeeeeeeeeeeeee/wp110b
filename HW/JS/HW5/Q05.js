var n=[];
function a(n)
{ 
    var i,j = 0;
    for(i = 0; i < n.length; i++) j = j + n[i];
    return j / n.length;
}
console.log(a([1,2,3,4,5]));
