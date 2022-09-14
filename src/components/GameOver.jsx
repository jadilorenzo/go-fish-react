import React, { Component } from 'react'
import { StateContext } from './StateProvider'
import { Card, Typography } from '@mui/material'

class GameOver extends Component {
    render() {
        const { game } = this.context
        return (
            <div>
                <Typography variant='h4'>Game Over</Typography>
                {game.players().sort((player1, player2) => (
                    player2.books().length - player1.books().length
                )).map((player, index) => (
                    <div key={index} style={{marginTop: '1rem'}}>
                        <div className='center'>
                            <Typography variant='h5' style={{margin: '1rem'}}>
                                <>{player.name} {player.isBot() || '(you)'}</>
                            </Typography>
                        </div>
                        <div
                            className='center'
                            style={{ marginLeft: '0.5rem', fontWeight: 'bold' }}
                        >
                            {player.books().map((book, index) => (
                                <Card key={index} sx={{p: 1, mr: 0.5}}>{book[0].rank()}</Card>
                            ))}
                            {player.books().length !== 0 || 'none'}
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

GameOver.contextType = StateContext

export default GameOver
