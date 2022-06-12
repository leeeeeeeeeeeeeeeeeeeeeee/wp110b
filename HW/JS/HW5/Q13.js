class ratio
{
    constructor(m,n)
    {
        this.m = m;
        this.n = n;
    }
    toString()
    {
        return this.m + '/' + this.n;
    }
    mul(that)
    {
        return that.m * this.m + "/" + that.n * this.n;
    }
    div(that)
    {
        return that.m * this.n + "/" + that.n * this.m;
    }
}
var r1 = new ratio(1,3);
var r2 = new ratio(2,4);
var r3 = r1.mul(r2);
console.log(r3.toString());
