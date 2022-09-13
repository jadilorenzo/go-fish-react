/* globals test expect beforeEach */
import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../../components/Header'
import StateProvider from '../../components/StateProvider'

beforeEach(() => {
    render(<StateProvider><Header/></StateProvider>)
})

test('renders learn react link', () => {
    const text = screen.getByText(/go fish/i)
    expect(text).toBeInTheDocument()
})

test('renders learn react link', () => {
    const button = screen.getByText(/login/i)
    expect(button).toBeInTheDocument()
})
