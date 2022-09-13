import { Container, Paper } from '@mui/material'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Body extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        return (
            <Container maxWidth="lg" sx={{ mt: 4 }}>
                <Paper sx={{ p: 4 }}>{this.props.children}</Paper>
            </Container>
        )
    }
}

Body.propTypes = { children: PropTypes.element.isRequired }

export default Body
