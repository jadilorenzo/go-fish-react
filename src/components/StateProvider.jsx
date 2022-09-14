import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    GameModel as Game,
    PlayerModel as Player,
    BotModel as Bot,
} from '../models'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { blue } from '@mui/material/colors'
import { CssBaseline } from '@mui/material'


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
            stats: [],
            darkMode: false
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
            prevState.game.playRound({ givingPlayerIndex: index, rank: this.state.rank, addStat: ({ stat, detail }) => prevState.stats.push({ stat, detail }) })

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
            prevState.rank = ''
        })
    }

    toggleDarkMode() {
        this.setState((prevState) => ({...prevState, darkMode: !prevState.darkMode}))
    }

    render() {
        const theme = createTheme({
            palette: {
                mode: this.state.darkMode ? 'dark' : 'light',
                primary: {
                    main: blue[500],
                },
                background: {
                    default: this.state.darkMode ? '#121212' : '#f5f5f5'
                }
            },
        })

        return (
            <StateContext.Provider value={{
                ...this.state,
                redirect: ({ page }) => this.setState({ page }),
                setRank: ({rank}) => this.setState({ rank }),
                setPlayer: ({index}) => this.setPlayer({index}),
                onLogin: ({ userName, numberOfBots }) => this.onLogin({ userName, numberOfBots }),
                toggleDarkMode: () => this.toggleDarkMode()
            }}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {this.props.children}
                </ThemeProvider>
            </StateContext.Provider>
        )
    }
}

StateProvider.propTypes = {
    children: PropTypes.any.isRequired
}

export default StateProvider
