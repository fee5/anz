import React, { PureComponent } from 'react'
import { Link, Route } from 'react-router-dom'


export default class NavBar extends PureComponent {
  state = {
    dropdownOpen: false,
  }

  logout = e => {
    e.preventDefault()
    this.props.logout()
  }

  handleClick = () => {
    window.location = '/portal'
  }

  handleOpenDropdown = e => {
    e.preventDefault()
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    })
  }

  render() {
    return (
      this.props.portal.isLogin
        ? (
        <div className="navbar__">
          <div className="ctn">
            <div className="cf">
              <div className="fl">
                <a href="/">Home</a>
                <a href="/dashboard">Dashboard</a>
              </div>
              <div className="fr navbar-dropdown">
                <a onClick={this.handleOpenDropdown} href="">Admin &#x025BE;</a>
                {
                  this.state.dropdownOpen
                    ? <div><a href="/" onClick={this.logout}>Logout</a></div>
                    : undefined
                }
              </div>
            </div>
          </div>
        </div>
      )
        : <div />
    )
  }
}
