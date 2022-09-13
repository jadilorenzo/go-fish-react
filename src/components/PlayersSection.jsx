import { Typography } from '@mui/material'
import React, { Component } from 'react'
import { StateContext } from './StateProvider'

class PlayersSection extends Component {
    render() {
        const { game } = this.context
        return (
            <div>
                <Typography variant='subtitle1'>Players:</Typography>
                {game.players().map((player) => (
                    <div key={player.name}>
                        {player.name}
                    </div>
                ))}
            </div>
        )
    }
}

PlayersSection.contextType = StateContext

export default PlayersSection
