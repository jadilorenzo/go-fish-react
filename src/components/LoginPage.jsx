import React from 'react'
import { StateContext } from './StateProvider'
import { Button, TextField, Typography, FormGroup } from '@mui/material'
import { Box } from '@mui/system'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            error: false
        }
    }

    onChange(event) { this.setState({ name: event.target.value }) }

    onClick() {
        if (this.state.name !== '') {
            this.context.onLogin({ userName: this.state.name })
        } else {
            this.setState({ error: true })
        }
    }

    render() {
        return (
            <>
                <Typography variant='h5' sx={{mb: 2}}>Login</Typography>
                <FormGroup>
                    <TextField
                        error={this.state.error}
                        label='Name'
                        type="text"
                        id="name"
                        required
                        onChange={(e) => this.onChange(e)}
                        value={this.state.name}
                    />

                    <Box sx={{ mt: 2 }}>
                        <Button
                            onClick={() => this.onClick()}
                            variant='outlined'
                            type='submit'
                            style={{ float: 'right' }}
                        >
                            Login
                        </Button>
                    </Box>
                </FormGroup>
            </>
        )
    }
}

LoginPage.contextType = StateContext

export default LoginPage
