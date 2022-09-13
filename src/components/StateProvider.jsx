import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const StateContext = React.createContext()

class StateProvider extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            page: 'app', // login | game | info
            userName: ''
        }
    }

    redirect({ page }) {
        this.setState({ page })
    }

    onLogin({ userName }) {
        this.setState({ userName, page: 'game' })
    }

    render() {
        return (
            <StateContext.Provider value={{
                ...this.state,
                redirect: ({ page }) => this.redirect({ page }),
                onLogin: ({ userName }) => this.onLogin({ userName })
            }}>{this.props.children}</StateContext.Provider>
        )
    }
}

StateProvider.propTypes = {
    children: PropTypes.any.isRequired
}

export default StateProvider
