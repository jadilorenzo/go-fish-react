import { Typography, Button } from '@mui/material'
import React, { Component } from 'react'
import { StateContext } from './StateProvider'

class InfoPage extends Component {
    render() {
        const { redirect } = this.context
        return (
            <div>
                <Typography variant='h4'>Go Fish Rules</Typography>
                <div style={{ height: '1rem' }} />
                <Typography variant='subtitle2'>OBJECT OF THE GAME</Typography>
                <Typography variant='body'>
                    The goal is to win the most &quot;books&quot; of cards.
                    A book is any four of a kind, such as four kings, four aces, and so on.
                </Typography>
                <div style={{ height: '1rem' }}/>
                <Typography variant='subtitle2'>THE PLAY</Typography>
                <Typography variant='body'>
                    The player to the left of the dealer looks directly at any opponent and says,
                    for example, &quot;Give me your kings,&quot; usually addressing the opponent by name and
                    specifying the rank that they want, from ace down to two.
                    The player who is &quot;fishing&quot; must have at least one card of the rank that was asked
                    for in their hand. The player who is addressed must hand over all the cards requested.
                    If the player has none, they say, &quot;Go fish!&quot; and the player who
                    made the request draws the top card of the stock and places it in their hand.
                </Typography>
                <div style={{ height: '1rem' }} />
                <Typography variant='body'>
                    If a player gets one or more cards of the named rank that was asked for,
                    they are entitled to ask the same or another player for a card.
                    The player can ask for the same card or a different one.
                    So long as the player succeeds in getting cards (makes a catch), their turn continues.
                    When a player makes a catch, they must reveal the card so that the catch is verified.
                    If a player gets the fourth card of a book, the player shows all four cards,
                    places them on the table face up in front of everyone, and plays again.
                </Typography>
                <div style={{ height: '1rem' }} />
                <Typography variant='body'>
                    If the player goes fishing without &quot;making a catch&quot;
                    (does not receive a card he asked for), the turn passes to the left.
                </Typography>

                <div style={{ height: '1rem' }} />
                <Typography variant='body'>
                    The game ends when all thirteen books have been won.
                    The winner is the player with the most books.
                    During the game, if a player is left without cards, they may
                    (when it&apos;s their turn to play), draw from the stock and then ask for cards of that rank.
                    If there are no cards left in the stock, they are out of the game.
                </Typography>
                <div style={{ height: '1rem' }} />
                <Button
                    color='primary'
                    variant='contained'
                    onClick={() => redirect({ page: 'login' })}
                >Start</Button>
            </div>
        )
    }
}

InfoPage.contextType = StateContext

export default InfoPage
