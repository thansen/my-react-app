import * as React from "react"
import { Link } from "gatsby"
import logo from '../images/logo-designcode.svg'
import './header.css'


class Header extends React.Component {
  constructor(props) {
    super(props)
    /* Set the initial values for state variables */
    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
      window.addEventListener("scroll", this.handleScroll)
  }

  
  handleScroll = (event) => {
    const scrollTop = window.pageYOffset
    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }
  
  render() {
    return (
      <header className={this.state.hasScrolled ? 'scrolled' : ''}>
        <div className="headerGroup">
          
          <Link to="/" className="logo"><img src={logo} width="30"></img></Link>
          <Link to="/courses" >Courses</Link>
          <Link to="/downloads" >Downloads</Link>
          <Link to="/workshops" >Workshops</Link>
          <Link to="/buy" ><button>Buy</button></Link>
        </div>
      </header>
    )
  }
}

export default Header
