import React, { Fragment } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Profile from './components/profile'
import LoginForm from './components/loginForm'
import Nav from './components/nav'
import NotFound from './components/notFound'
import './App.css'

class App extends React.Component {
   state = {
      user: null
   }

   updateCurrentUser = (user) => {
      this.setState({ user })
   }

   componentDidMount() {
      //check to see if there is a jwt?
      //if there is, fetch to get the user asnd update the user state
      let token = localStorage.getItem("jwt")
      if (token) {
         fetch("http://localhost:3000/profile", {
            headers: { "Authentication": `Bearer ${token}` }
         })
            .then(res => res.json())
            .then(user => {
               this.updateCurrentUser(user)
            })
      }
      //if not, let them log in
   }

   render() {
      return (
         <Fragment>
            <Nav logged_in={this.state.user} updateCurrentUser={this.updateCurrentUser} />
            <Switch>
               <Route exact path="/" render={() => <Redirect to="/profile" />} />

               <Route exact path="/profile" render={() => {
                  return (this.state.user ?
                     <Profile user={this.state.user} /> :
                     <Redirect to="/login" />)
               }
               } />

               <Route exact path="/login" render={() => {
                  return (this.state.user ?
                     <Redirect to="/profile" /> :
                     <LoginForm updateCurrentUser={this.updateCurrentUser} />)
               }
               }
               />
               <Route component={NotFound} />
            </Switch>
         </Fragment>
      )
   }
}

export default withRouter(App)