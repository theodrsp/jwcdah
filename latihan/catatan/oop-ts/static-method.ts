class Calculator {
    static pi: number = 22/7

    calculateArea(radius: number): number {
        return Calculator.pi * radius**2 
    } 
}

const calc = new Calculator
console.log(calc.calculateArea(7))