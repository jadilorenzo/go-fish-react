import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../../App'
/* globals test expect beforeEach */

beforeEach(() => {
    render(<App />)
})

test('renders header', () => {
    const elements = screen.getAllByText(/go fish/i)
    expect(elements[0]).toBeInTheDocument()
    expect(elements[1]).toBeInTheDocument()
})

test('logs in', () => {
    const button = screen.getByRole('start-button')
    fireEvent.click(button)
    const input = screen.getByRole('input')
    fireEvent.change(input, {
        target: { value: 'JavaScript' },
    })
    const startButton = screen.getByRole('button')
    fireEvent.click(startButton)

    expect(screen.getByText(/logged in as: javascript/i)).toBeInTheDocument()
})
