import { Typography } from '@mui/material'
import React, { Component } from 'react'
import { StateContext } from './StateProvider'

class StatsSection extends Component {
    render() {
        const { stats } = this.context
        return (
            <div>
                <Typography variant='subtitle1'>History:</Typography>
                <Typography variant='subtitle1'>(latest at top)</Typography>
                <div style={{ overflow: 'scroll', height: '14rem' }}>
                    {stats.reverse().map(({stat, detail}, index) => (
                        <div key={index}><b>{stat}:</b> {detail}</div>
                    ))}
                </div>
            </div>
        )
    }
}

StatsSection.contextType = StateContext

export default StatsSection
