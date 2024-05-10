import {useState} from 'react'
import './index.css'

const Step = props => {
  const {stepDetails} = props
  const {displayText, stepId, completed, stepNumber} = stepDetails

  return (
    <li className="step-list">
      {completed === false && (
        <>
          <p>{stepNumber}</p>
          <img
            src="https://res-console.cloudinary.com/dkjkncj4l/thumbnails/v1/image/upload/v1715243378/RWxsaXBzZV8zX215Ym14eA==/drilldown"
            alt={displayText}
            className="image"
          />
        </>
      )}
      {completed === true && (
        <img
          src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
          className="image-icon"
          alt={displayText}
        />
      )}

      <p className="step-button">{displayText}</p>
    </li>
  )
}

export default Step
