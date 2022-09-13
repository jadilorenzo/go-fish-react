import { Button, Card, Typography } from '@mui/material'
import React, { Component } from 'react'
import { StateContext } from './StateProvider'

class PlayersSection extends Component {
    render() {
        const { game, rank, setPlayer } = this.context
        return (
            <div>
                <Typography variant='subtitle1'>Players:</Typography>
                {game.players().map((player, index) => (
                    <div key={player.name} style={{ marginTop: '0.5rem' }}>
                        <Card>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}>
                                <div className='center'>
                                    <Typography variant='h6' style={{margin: '1rem'}}>
                                        <>{player.name} {index !== 0 || '(you)'}</>
                                    </Typography>
                                </div>
                                <div className='center'>
                                    {player.hand().length} card{player.hand().length !== 1 ? 's' : null}
                                </div>
                                <div
                                    className='center'
                                    style={{ marginLeft: '0.5rem', fontWeight: 'bold' }}
                                >
                                    {player.books().map((book) => book[0].rank()).join(', ')}
                                </div>
                                <div style={{flexGrow: 1}}/>
                                {(rank === '' || index === 0) || (
                                    <Button
                                        variant='contained'
                                        style={{
                                            borderTopLeftRadius: 0,
                                            borderBottomLeftRadius: 0,
                                        }}
                                        onClick={() => setPlayer({ index })}
                                    >Ask</Button>
                                )}
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        )
    }
}

PlayersSection.contextType = StateContext

export default PlayersSection
