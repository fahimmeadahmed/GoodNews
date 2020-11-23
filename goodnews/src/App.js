import React from 'react'
// import DatePicker from 'react-datepicker'
import './App.css'
import Calendar from './Calendar'
import Header from './Header'
import { store } from "./actions/store"
import { Provider } from "react-redux"
import NLists from './components/NLists'
import { Container } from '@material-ui/core'
import Footer from './Footer'
import TLists from './components/TLists'
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Routes from './Routes'

// import 'react-datepicker/dist/react-datepicker.css'
function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Calendar />
        <br />
        <Provider store={store}>
          {/* <Container maxWidth="lg">
            <TLists />
          </Container> */}
          <Routes></Routes>
          {/* <Container maxWidth="lg">
            <NLists />
          </Container> */}
          {/* <Container maxWidth="lg">
            <Route path="/details" exact render={
              () => {
                return (<NLists />)
              }
            } />
          </Container> */}

        </Provider>
        <Footer />
      </div>
    </Router>
  )
}
export default App;
