import { Typography } from '@mui/material'
import React, { Component } from 'react'
import { StateContext } from './StateProvider'

class HandSection extends Component {
    render() {
        const { game } = this.context
        return (
            <div>
                <Typography variant='subtitle1'>Hand:</Typography>
                {game.players(0).hand().map((card) => (
                    <div key={`${card.suit()}_${card.rank()}`}>{card.suit()}_{card.rank()}</div>
                ))}
            </div>
        )
    }
}

HandSection.contextType = StateContext

export default HandSection
