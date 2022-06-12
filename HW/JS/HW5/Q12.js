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
    add(that)
    {
        return this.m * that.n + this.n * that.m + '/' + this.n * that.n;
    }
    sub(that)
    {
        return this.n * that.n - this.n * that.m + '/' + this.n * that.n;
    }
}
var r1 = new ratio(1,3);
var r2 = new ratio(2,4);
var r3 = r1.add(r2);
console.log(r3.toString());
