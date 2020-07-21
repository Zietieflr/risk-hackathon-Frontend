import React, { Component } from 'react'
import RiskActivities from './RiskActivities'

class RiskForm extends Component {
  state = {
    riskLevel: '',
  }

  handleChange = (event) => {
    this.setState({riskLevel: event.target.value})
  } 

  activityOptions = (riskLevel) => {
    const filtered = this.props.riskActivities.filter(activity => activity.risk_level === riskLevel)
    return filtered.map(activity => {
      return <RiskActivities key={activity.id} activity={activity} />
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('RiskForm', event.target)
    // this.average()
  }

  render(){
    return (
      <form className='risk-form'  onSubmit={(event) => this.handleSubmit(event)}>
        <select onChange={event => this.handleChange(event)} name='risk' id='risk-select'>
          <option value=''>Please Select a Risk Level</option>
          <option value='Low Risk'>Low</option>
          <option value='Low-Moderate'>Low-Moderate</option>
          <option value='Moderate Risk'>Moderate</option>
          <option value='High-Moderate'>High-Moderate</option>
          <option value='High Risk'>High</option>
        </select> 
        {
          this.state.riskLevel === '' 
            ? null 
            : <select>{this.activityOptions(this.state.riskLevel)}</select> 
        } 
        {
          this.state.riskLevel === '' 
          ? null 
          : <input type='submit' value='Submit' />
        }
        
      </form>
    )
  }
}

export default RiskForm
