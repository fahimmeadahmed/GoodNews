import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { Component } from 'react'
import NLists from './components/NLists'
import { Container } from '@material-ui/core'
import TLists from './components/TLists'
class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Container>
                        <Route path="/details" exact strict render={
                            () => {
                                return (<NLists />)
                            }
                        } />
                        <Route path="/titles" exact strict render={
                            () => {
                                return (<TLists />)
                            }
                        } />
                    </Container>
                </div>
            </Router>
        )
    }
}

export default Routes
