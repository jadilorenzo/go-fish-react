import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
/* globals test expect */

test('renders learn react link', () => {
    render(<App />)
    // expect(screen.findByTestId('header')).toHaveTextContent(/go fish/i)
})
