function calculateBmi(weightKg: number, heightMeters: number) {
    if (heightMeters <= 0 || weightKg <= 0) {
        throw new Error("Weight and height must be positive"); // untuk ngecut proses langsung ke error
    }

    const bmi = weightKg / (heightMeters * heightMeters);
    if (bmi<18.5) return "less weight";
    if (bmi<=24.9) return "ideal";
    if (bmi <= 29.9) return "overweight";
    if (bmi <= 39.9) return "very overweight";

    return "obesity";
}
console.log("--BMI Challenge--")
console.log(calculateBmi(60,1.7))