import React, { Component } from 'react'
import InfoPage from './components/InfoPage'
import LoginPage from './components/LoginPage'
import LandingPage from './components/LandingPage'
import GamePage from './components/GamePage'
import { StateContext } from './components/StateProvider'
import GameOver from './components/GameOver'

class AppRouter extends Component {
    render() {
        const {page} = this.context
        return (
            <div>
                {(page === 'login') ? (
                    <LoginPage/>
                ) : (page === 'app') ? (
                    <LandingPage/>
                ) : (page === 'info') ? (
                    <InfoPage/>
                ) : (page === 'game') ? (
                    <GamePage />
                ) : (page === 'end') ? (
                    <GameOver />
                ) : null}
            </div>
        )
    }
}

AppRouter.contextType = StateContext

export default AppRouter
