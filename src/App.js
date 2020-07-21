import React, { Component } from 'react';
import UserForm from './components/UserForm'
import RiskForm from './components/RiskForm'
import './App.css';

const url = {
  users: 'http://localhost:3000/users/',
  user: 'http://localhost:3000/users/',
  activities: 'http://localhost:3000/activities/',
}

class App extends Component {
  
  state = {
    riskActivities: [],
    user: null, 
  }

  componentDidMount() {
    // fetch(url.activities)
    //   .then(response => response.json())
    //   .then(results => this.setState({riskActivities: results}))
  }

  signIn = () => {
    fetch(url.user)
      .then(response => response.json())
      .then(result => this.setState({user: result}))
  }

  newUser = (username) => {
    boilerplateFetch(url.users, 'CREATE', {username: username})
      .then(result => this.setState({user: result}))
  }

  render() {
    return (
      <div className="App">
        <h1>At Risk?</h1>
        {this.state.user ? null : <UserForm signIn={this.signIn} newUser={this.newUser} />}
        <RiskForm />
      </div>
    );
  }
}

function boilerplateFetch(url, method, body) {
  fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
}

export default App;
