import React, { Component } from 'react'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import AppRouter from './AppRouter'
import StateProvider from './components/StateProvider'

class App extends Component {
    render() {
        return (
            <StateProvider>
                <Header/>
                <Body>
                    <AppRouter/>
                </Body>
            </StateProvider>
        )
    }
}

export default App
