class point
{
    constructor(array)
    {
        this.a = array;
    }

    length()
    {
        let n = 0;
        for (let i = 0 ; i < this.a.length ; i++) n = n + this.a[i] * this.a[i];
        return Math.sqrt(n);
    }

    neg()
    {
        let a1 = [];
        for (let i=0 ; i < this.a.length ; i++) a1[i]=this.a[i] * -1;
        return a1;
    }

    add(p2)
    {   
        let a2 = [];
        for (let i = 0 ; i < this.a.length ; i++) a2[i] = this.a[i] + p2[i];
        return a2;
    }

    sub(p2)
    {
        let a3=[];
        for(let i = 0 ; i < this.a.length ; i++) a3[i] = this.a[i] - p2.a[i];
        return new point(a3);
    }

    dot(p2)
    {
        let m = 0;
        for(let i=0;i < this.a.length ; i++) m = m + this.a[i] * p2.a[i];
        return m;
    }

    distance(p2)
    {
        return this.sub(p2).length();
    }

    toString()
    {
        return '(' + this.a + ')';
    }
}
let p = new point([2,3]);
let p2 = new point([1,2]);
console.log(p.toString());
console.log(p.length().toString());
console.log(p.sub(p2).toString());
console.log(p.distance(p2).toString());
console.log(p.dot(p2).toString());
