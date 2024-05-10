import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className="header">
      <nav className="nav-container">
        <div className="trip-container">
          <header>
            <Link className="link" to="/">
              <h1 className="trip-heading">Travel Trip</h1>
            </Link>
          </header>
        </div>
        <div className="links-container">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/my-trips">
            My Trips
          </Link>
        </div>
        <button className="button-logout" onClick={onClickLogout} type="button">
          Logout
        </button>
      </nav>
    </nav>
  )
}

export default withRouter(Header)
