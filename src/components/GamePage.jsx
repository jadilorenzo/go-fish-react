import { Grid } from '@mui/material'
import React, { Component } from 'react'
import PlayersSection from './PlayersSection'
import StatsSection from './StatsSection'
import HandSection from './HandSection'

export default class GamePage extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={6}><PlayersSection/></Grid>
                    <Grid item xs={6}><StatsSection/></Grid>
                    <Grid item xs={12}><HandSection/></Grid>
                </Grid>
            </div>
        )
    }
}
