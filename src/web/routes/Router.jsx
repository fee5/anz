import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import styles from '../styles'
import Navbar from '../components/Navbar'
import Loading from '../components/Loading'
import Exception from '../components/Exception'

import HomeRoute from './home'
import PortalRoute from './portal'
import DashboardRoute from './dashboard'

const PrivateRoute = ({ component: Compo, portal, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      portal.isLogin ?
        <Compo {...props} /> :
        <Redirect
          to={{
            pathname: '/portal',
            state: { from: props.location },
          }}
        />
    )}
  />
)

export default class Router extends Component {
  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <Navbar />
        <Loading />
        <Exception />
        <Route exact path="/portal" component={PortalRoute} />
        <PrivateRoute exact path="/" portal={this.props.portal} component={HomeRoute} />
        <PrivateRoute exact path="/dashboard" portal={this.props.portal} component={DashboardRoute} />
      </div>
    )
  }
}
