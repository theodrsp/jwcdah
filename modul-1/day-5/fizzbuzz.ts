
function runFizzBuzz(limit: number){
    const result: string[] = []

    for (let i: number = 1; i <= limit; i++){
        const isFizz = i % 3 === 0
        const isBuzz = i%5 === 0

        if (isFizz && isBuzz) {
            result.push("FizzBuzz");
        } else if (isFizz) {
            result.push("Fizz");
        } else if (isBuzz) {
            result.push("Buzz");
        } else{
            result.push(i.toString());
        }
    }

    return result.join(", ")
}

console.log(" --- Fizz Buzz Challenge ---");
console.log(runFizzBuzz(6));
console.log(runFizzBuzz(15));