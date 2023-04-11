class Calculator{
    constructor(advice, brand){
        this._advice = advice,
        this._brand = brand
    }
    
    multiple = function(){
        return this._advice * this._brand
    }

    squar = function(){
        console.log(this.multiple(), "at squar");
    return `advice = ${this._advice**2}, brand = ${this._brand**2}`
    }
}

let calc = new Calculator(10, 8);

console.log(calc.multiple());
console.log(calc.squar());