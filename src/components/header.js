import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from '../images/logo-designcode.svg'
import './header.css'

const Header = ({ siteTitle }) => (
  <header>
    <div className="headerGroup">
      <Link to="/" className="logo"><img src={logo} width="30"></img></Link>
      <Link to="/courses" >Courses</Link>
      <Link to="/downloads" >Downloads</Link>
      <Link to="/workshops" >Workshops</Link>
      <Link to="/buy" ><button>Buy</button></Link>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
