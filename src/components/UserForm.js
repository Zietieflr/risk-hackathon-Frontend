import React, { Component } from 'react'

const initialState = {username: ''}

class UserForm extends Component {
  state = initialState
  
  handleTyping = (event) => {
    this.setState({username: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.signIn(this.state.username)
  }

  handleNewUser = (event) => {
    event.preventDefault()
    this.props.newUser(this.state.username)
  }
  
  render() {
    return(
      <section className='user-forms'>
        <form onSubmit={event => this.handleSubmit(event)}>
          Who are you?&nbsp;&nbsp;
          <input onChange={event => this.handleTyping(event)} name='username' placeholder='Username' />
          <input type='submit' value='Sign In' />
        </form>
        <form onSubmit={event => this.handleNewUser(event)}>
          New here?&nbsp;&nbsp; 
          <input onChange={event => this.handleTyping(event)} name='username' placeholder='New Username' />
          <input type='submit' value='New User' />
        </form>
      </section>
    )
  }
}

export default UserForm 