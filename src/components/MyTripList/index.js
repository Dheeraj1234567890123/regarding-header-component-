import './index.css'

const MyTripList = props => {
  const {tripDetails} = props
  const {id, location, startDate, endDate} = tripDetails

  return (
    <li>
      <h1>{location}</h1>
      <p>{startDate}</p>
      <p>{endDate}</p>
      <button type="button">Cancel</button>
    </li>
  )
}

export default MyTripList
