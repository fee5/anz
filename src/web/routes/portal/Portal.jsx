import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'

export default class C extends PureComponent {
  state = {
    account: '',
    password: '',
    isLoginKept: false,
  }

  handleChange = key => e => {
    this.setState({
      [key]: key === 'isLoginKept' ? e.target.checked : e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.login(this.state)
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    if (this.props.portal.isLogin) {
      return (
        <Redirect to={from} />
      )
    }
    return (
      <div className="ctn">
        <form
          className="form-login"
          onSubmit={this.handleSubmit}
        >
          <div>
            <label htmlFor="">User ID:</label>
            <input
              onChange={this.handleChange('account')}
              value={this.state.username}
              type="text" placeholder="Username"
            />
          </div>
          <div>
            <label htmlFor="">Password:</label>
            <input
              onChange={this.handleChange('password')}
              value={this.state.password}
              type="password" placeholder="Password"
            />
          </div>
          <button type="submit">
            Log In &#x027F6;
          </button>
        </form>
      </div>
    )
  }
}
