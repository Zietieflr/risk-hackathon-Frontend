import React, { Component } from 'react'
import RiskActivities from './RiskActivities'

class RiskForm extends Component {
  state = {
    riskLevel: '',
    activities: [{}],
  }

  handleChange = (event) => {
    this.setState({riskLevel: event.target.value})
  } 

  activityOptions = (riskLevel) => {
    this.state.activities.filter(activity => activity.risk_level === riskLevel)
    return this.state.activities.map(activity => {
      return <RiskActivities key={activity.id} activity={activity} />
    })
  }

  render(){
    return (
      <form className='risk-form'>
        <select onChange={event => this.handleChange(event)} name='risk' id='risk-select'>
          <option value=''>Please Select a Risk Level</option>
          <option value='Low'>Low</option>
          <option value='Low-Moderate'>Low-Moderate</option>
          <option value='Moderate'>Moderate</option>
          <option value='High-Moderate'>High-Moderate</option>
          <option value='High'>High</option>
        </select> 
        {
          this.state.riskLevel === '' 
            ? null 
            : <select>{this.activityOptions(this.state.riskLevel)}</select>
        } 
      </form>
    )
  }
}

export default RiskForm
