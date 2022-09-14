import { Typography } from '@mui/material'
import React, { Component } from 'react'
import { StateContext } from './StateProvider'

class HandSection extends Component {
    render() {
        const { game, setRank, rank } = this.context
        return (
            <div>
                <Typography variant='subtitle1'>Hand:</Typography>
                <div style={{
                    display: 'flex',
                    overflow: 'scroll'
                }}>
                    {game.players(0).hand().map((card) => (
                        <div
                            key={`${card.suit()}_${card.rank()}`}
                            onClick={() => setRank({ rank: card.rank() })}
                            className={`card ${card.rank() === rank ? 'card-selected' : ''}`}
                        >
                            <img style={{width: '10rem'}} alt={`${card.suit()}_${card.rank()}`} src={`/images/${card.suit()}_${card.rank()}.svg`}/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

HandSection.contextType = StateContext

export default HandSection
