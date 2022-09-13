import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    GameModel as Game,
    PlayerModel as Player,
    BotModel as Bot,
} from '../models'

export const StateContext = React.createContext()

const botNames = [
    'Tonald Drump',
    'Boe Jiden',
    'Pancy Nelosi',
    'Ced Truz',
]

class StateProvider extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            page: 'app', // login | game | info
            game: new Game(),
            userName: ''
        }

    }


    redirect({ page }) {
        this.setState({ page })
    }

    _generatePlayers({ numberOfBots, userName }) {
        const players = [new Player(userName)]
        for (let index = 0; index < numberOfBots; index++) {
            const name = botNames[index]
            players.push(new Bot(name))
        }
        return players
    }

    onLogin({ userName, numberOfBots }) {
        this.setState(() => {
            const game = new Game(this._generatePlayers({ numberOfBots, userName }))
            game.start()
            return {
                userName, page: 'game', game
            }
        })
    }

    render() {
        // console.log(this.state)
        return (
            <StateContext.Provider value={{
                ...this.state,
                redirect: ({ page }) => this.redirect({ page }),
                onLogin: ({ userName, numberOfBots }) => this.onLogin({ userName, numberOfBots })
            }}>{this.props.children}</StateContext.Provider>
        )
    }
}

StateProvider.propTypes = {
    children: PropTypes.any.isRequired
}

export default StateProvider
