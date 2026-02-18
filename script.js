// Weight Unit Converter Script

function convertWeight(value, fromUnit, toUnit) {
    const weightUnits = {
        grams: 1,
        kilograms: 1000,
        pounds: 453.592,
        ounces: 28.3495
    };

    if (!(fromUnit in weightUnits) || !(toUnit in weightUnits)) {
        throw new Error("Invalid weight units provided.");
    }

    const valueInGrams = value * weightUnits[fromUnit];
    return valueInGrams / weightUnits[toUnit];
}

// Example usage
console.log(convertWeight(100, 'grams', 'kilograms')); // Output: 0.1
console.log(convertWeight(1, 'pounds', 'grams')); // Output: 453.592