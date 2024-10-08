import { expect, test } from "vitest";
import Calculator from "../Calculator";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test('Calculate adddition', async () => {
    render(<Calculator />)

    const firstNumInput = screen.getByPlaceholderText('First number')
    userEvent.type(firstNumInput, '5')
    await waitFor(() => {
        expect(firstNumInput.value).toBe('5')
    })

    const operatorSelect = screen.getByRole('combobox')
    userEvent.selectOptions(operatorSelect, '+')

    const secondNumInput = screen.getByPlaceholderText('Second number')
    userEvent.type(secondNumInput, '3')
    await waitFor(() => {
        expect(secondNumInput.value).toBe('3')
    })

    userEvent.click(screen.getByRole('button', { name: '=' }))

    await waitFor(() => {
        expect(screen.getByPlaceholderText('Result').value).toBe('8')
    })
})
