import { Grid } from '@mui/material'
import React, { Component } from 'react'
import PlayersSection from './PlayersSection'
import StatsSection from './StatsSection'
import HandSection from './HandSection'

export default class GamePage extends Component {
    constructor() {
        super()
        this.state = {
            wide: window.innerWidth
        }
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({ wide: window.innerWidth })
        })
    }


    render() {
        const {wide} = this.state
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={wide < 800 ? 12 : 6}><PlayersSection/></Grid>
                    <Grid item xs={wide < 800 ? 12 : 6}><StatsSection/></Grid>
                    <Grid item xs={12}><HandSection/></Grid>
                </Grid>
            </div>
        )
    }
}
