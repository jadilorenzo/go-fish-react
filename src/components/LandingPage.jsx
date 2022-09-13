import { Button, Grid, Typography } from '@mui/material'
import React, { Component } from 'react'
import { StateContext } from './StateProvider'

class LandingPage extends Component {
    render() {
        const { redirect } = this.context
        return (
            <Grid
                container
                direction='column'
                justifyContent='center'
                alignItems='center'
                style={{
                    height: '25rem'
                }}
            >
                <Typography variant='h3' style={{fontWeight: 'bold'}}>Play Go Fish</Typography>
                <Typography variant='subtitle1'>Start Now.</Typography>
                <div style={{marginTop: '1rem'}}>
                    <Button
                        variant='outlined'
                        sx={{ mr: 1 }}
                        onClick={() => redirect({ page: 'info' })}
                    >Info</Button>
                    <Button
                        variant='contained'
                        onClick={() => redirect({ page: 'login' })}
                    >Start</Button>
                </div>
            </Grid>
        )
    }
}

LandingPage.contextType = StateContext

export default LandingPage
