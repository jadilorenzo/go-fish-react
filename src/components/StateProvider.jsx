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
            page: 'app', // login | game | info | end
            game: new Game(),
            userName: '',
            rank: '',
            stats: []
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

    setPlayer({ index }) {
        this.setState((prevState) => {
            prevState.game.playRound({ givingPlayerIndex: index, rank: prevState.rank, addStat: ({ stat, detail }) => prevState.stats.push({ stat, detail }) })
            prevState.rank = ''
            if (prevState.game.gameOver()) prevState.page = 'end'
            return prevState
        })
        this._checkIfOutOfCards()
    }

    _checkIfOutOfCards() {
        this.setState((prevState) => {
            if (!prevState.game.gameOver() && prevState.game.players(0).hand().length === 0) {
                this.setPlayer({})
            }
        })
    }

    render() {
        return (
            <StateContext.Provider value={{
                ...this.state,
                redirect: ({ page }) => this.setState({ page }),
                setRank: ({rank}) => this.setState({ rank }),
                setPlayer: ({index}) => this.setPlayer({index}),
                onLogin: ({ userName, numberOfBots }) => this.onLogin({ userName, numberOfBots }),
            }}>{this.props.children}</StateContext.Provider>
        )
    }
}

StateProvider.propTypes = {
    children: PropTypes.any.isRequired
}

export default StateProvider
