import { expect, test } from "vitest";
import calculate from "../calculate";

// sayHello('Sarah') -> 'hello, Sarah'

test('Add 5 to 7', () => {
    let result = calculate(5, 7, '+')
    expect(result).toBe(12)
})
test('Subtract 3 to 1', () => {
    let result = calculate(3, 1, '-')
    expect(result).toBe(2)
})
test('Multiply 5 to 10', () => {
    let result = calculate(5, 10, '*')
    expect(result).toBe(50)
})
test('Divide 10 to 2', () => {
    let result = calculate(10, 2, '/')
    expect(result).toBe(5)
})
test('Divide by zero', () => {
    let result = calculate(10, 0, '/')
    expect(result).toBe("Cannot divide by zero")
})
test('Invalid operator', () => {
    expect(() => calculate(10, 2, '&')).toThrowError("Invalid operator")
})
