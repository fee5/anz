import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getLogs } from '../../store/modules/logs'

import Component from './Dashboard.jsx'

const mapStateToProps = state => ({
  portal: state.portal,
  logs: state.logs,
})

export default withRouter(
  connect(mapStateToProps, {
    getLogs,
  })(Component),
)
