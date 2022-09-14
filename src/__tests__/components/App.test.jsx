import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../../App'
/* globals test expect beforeEach */

beforeEach(() => {
    render(<App />)
})

const login = () => {
    const button = screen.getByRole('start-button')
    fireEvent.click(button)
    const input = screen.getByRole('input')
    fireEvent.change(input, {
        target: { value: 'User' },
    })
    const startButton = screen.getByRole('submit-button')
    fireEvent.click(startButton)
}

test('renders header', () => {
    const elements = screen.getAllByText(/go fish/i)
    expect(elements[0]).toBeInTheDocument()
    expect(elements[1]).toBeInTheDocument()
})

test('logs in', () => {
    login()

    expect(screen.getByText(/logged in as: user/i)).toBeInTheDocument()
})

test('logs in and plays game', () => {
    login()

    while (!screen.queryByText(/game over/i)) {
        const cardButton = screen.getByRole('card-0')
        fireEvent.click(cardButton)
        const playerButton = screen.getByRole('player-1')
        fireEvent.click(playerButton)
    }

    expect(screen.getByText(/game over/i)).toBeInTheDocument()
})

