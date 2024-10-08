
export default function calculate(val1, val2, operator) {
    const num1 = parseFloat(val1)
    const num2 = parseFloat(val2)

    let result
    switch (operator) {
        case '+':
            result = num1 + num2
            break
        case '-':
            result = num1 - num2
            break
        case '*':
            result = num1 * num2
            break
        case '/':
            if (num1 === 0 || num2 === 0) {
                return "Cannot divide by zero"
            }
            result = num1 / num2
            break
        default:
            throw new Error("Invalid operator")
    }
    return result
}
