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
    reduce(){
        var min;
        if(this.m > this.n) min = this.n;
        else min = this.m;

        for(var i = 2 ; i <= min ; i++){
            if(this.m % i == 0 && this.n % i == 0){
                this.m /= i;
                this.n /=i;
                min /=i;
                i=2;
            }
        }
    }
}
var r1 = new ratio(6,9); 
r1.reduce();
console.log(r1.toString());
