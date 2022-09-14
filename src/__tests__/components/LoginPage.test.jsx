/* globals test expect beforeEach */
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import LoginPage from '../../components/LoginPage'
import StateProvider from '../../components/StateProvider'

beforeEach(() => {
    render(<StateProvider><LoginPage /></StateProvider>)
})

test('renders LoginPage', () => {
    const text = screen.getAllByText(/login/i)[0]
    expect(text).toBeInTheDocument()
})

test('changes with input', () => {
    const input = screen.getByRole('input')
    fireEvent.change(input, {
        target: { value: 'JavaScript' },
    })
    expect(input.value).toBe('JavaScript')
})

test('rejects empty name', () => {
    const input = screen.getByRole('input')
    fireEvent.change(input, {
        target: { value: '' },
    })
    const startButton = screen.getByRole('submit-button')
    fireEvent.click(startButton)


    expect(screen.getByText(/name required/i)).toBeInTheDocument()
})
