import React from 'react'

function RiskActivities({ activity }) {
  return (
    <option value={activity.numerical_risk}>{activity.name}</option>
  )
}

export default RiskActivities