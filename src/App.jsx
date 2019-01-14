import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import MovieList from './components/movieList'
import Customers from './components/customer'
import Rentals from './components/rentals'
import NotFound from './components/notFound'
import NavBar from './components/common/navBar'
import MovieForm from './components/movieForm'
import LoginForm from './components/loginForm'
import './App.css'
import RegisterForm from './components/registerForm'

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <NavBar />
        <main className='container'>
          <Switch>
            <Route path='/login' component={LoginForm} />
            <Route path='/register' component={RegisterForm} />
            <Route path='/movies/:id' component={MovieForm} />
            <Route path='/movies' component={MovieList} />
            <Route path='/customers' component={Customers} />
            <Route path='/rentals' component={Rentals} />
            <Route path='/not-found' component={NotFound} />
            <Redirect from='/' exact to='/movies' />
            <Redirect to='/not-found' />
          </Switch>
        </main>
      </React.Fragment>
    )
  }
}

export default App
