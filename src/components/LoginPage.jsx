import React from 'react'
import { StateContext } from './StateProvider'
import { Button, TextField, Typography, FormGroup } from '@mui/material'
import { Box } from '@mui/system'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Beffery Jezos',
            nameError: false,
            number: 1,
            numbeError: false
        }
    }

    onNameChange(event) { this.setState({ name: event.target.value }) }

    onNumberChange(event) { this.setState({ number: Number(event.target.value) }) }


    onClick() {
        if (this.state.name === '') {
            this.setState({ nameError: true })
        } else if (this.state.number < 1 || this.state.number > 4) {
            this.setState({ numberError: true })
        } else {
            this.context.onLogin({ userName: this.state.name })
        }
    }

    render() {
        const {
            nameError,
            name,
            numberError,
            number
        } = this.state
        return (
            <>
                <Typography variant='h5' sx={{ mb: 2 }}>Login</Typography>
                <FormGroup>
                    <TextField
                        error={nameError}
                        label='Name'
                        inputProps={{
                            role: 'input'
                        }}
                        id="name"
                        required
                        helperText={nameError ? 'Name required.' : ''}
                        onChange={(e) => this.onNameChange(e)}
                        value={name}
                    />

                    <TextField
                        sx={{mt: 2}}
                        error={numberError}
                        label='Number of Bots'
                        inputProps={{ role: 'number-input', min: 1, max: 4 }}
                        id="number"
                        type='number'
                        helperText={numberError ? 'Invalid number of bots.' : ''}
                        onChange={(e) => this.onNumberChange(e)}
                        value={number}
                    />

                    <Box sx={{ mt: 2 }}>
                        <Button
                            onClick={() => this.onClick()}
                            variant='outlined'
                            type='submit'
                            style={{ float: 'right' }}
                            role='button'
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
