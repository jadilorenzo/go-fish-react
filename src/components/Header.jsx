import React, { Component } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import SailingIcon from '@mui/icons-material/Sailing'
import IconButton from '@mui/material/IconButton'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import Icon from '@mui/material/Icon'
import { StateContext } from './StateProvider'

class Header extends Component {
    render() {
        const { redirect, page, userName, toggleDarkMode, darkMode } = this.context
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Icon
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <SailingIcon />
                        </Icon>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Go Fish
                        </Typography>
                        {page === 'app' ? (
                            <Button onClick={() => redirect({ page:'login' })} color="inherit">Login</Button>
                        ) : (userName !== '') ? (
                            <Typography variant='button'>Logged In as: {userName}</Typography>
                        ) : null}
                        <IconButton sx={{ ml: 1 }} onClick={() => toggleDarkMode()} color="inherit">
                            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
        )
    }
}

Header.contextType = StateContext

export default Header
