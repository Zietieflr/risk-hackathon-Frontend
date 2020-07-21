import React from 'react'

function RiskActivities(props) {
  return (
    <option value={props.activity.numerical_level}>{props.activity.activity}</option>
  )
}

export default RiskActivities