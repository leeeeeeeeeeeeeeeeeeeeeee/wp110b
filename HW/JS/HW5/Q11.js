class a
{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
    }
    toString()
    {
        return this.x + '/' + this.y;
    }
}
var ans = new a(1,3);
console.log(ans.toString());
