var a = [[1,2,3],[3,2,1]];
var k = [];
var i,j;
for (i = 0; i < a[0].length; i++)
{
    k[i] = [];
    for (j = 0;j < a.length; j++) k[i][j] = a[j][i];
}
console.log(k);
