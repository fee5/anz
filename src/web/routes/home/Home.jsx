import React, { PureComponent } from 'react'

export default class Home extends PureComponent {
  state = {
    filter: '',
  }

  componentDidMount() {
    this.props.getLogs()
  }

  handleFilter = e => {
    this.setState({
      filter: e.target.value,
    })
  }

  render() {
    const { logs } = this.props
    const { filter } = this.state

    const filteredLogs = logs.filter(v => {
      if (filter === '') return true
      if (v.logLevel.toUpperCase() === filter) {
        return true
      }
      return false
    })

    return (
      <div>
        <div className="breadcrumbs">
          <div className="ctn">
            Home
          </div>
        </div>
        <div className="ctn" style={{ marginTop: '10px' }}>
          <div className="home-content">
            <div className="home-content-select">
              <select onChange={this.handleFilter} name="" id="">
                <option value="">Log Level</option>
                <option value="DEBUG">DEBUG</option>
                <option value="INFO">INFO</option>
                <option value="WARN">WARN</option>
                <option value="ERROR">ERROR</option>
                <option value="FATAL">FATAL</option>
              </select>
            </div>
            <div className="home-content-table">
              <table>
                <thead>
                  <tr>
                    <th>TimeStamp</th>
                    <th>Log Marker</th>
                    <th>Logger</th>
                    <th>Log Level</th>
                    <th>Current Thread</th>
                    <th>Log Message</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    filteredLogs.map((v, k) => (
                      <tr key={k}>
                        <td>{v.timestamp}</td>
                        <td>{v.logMarker}</td>
                        <td>{v.logger}</td>
                        <td>{v.logLevel}</td>
                        <td>{v.currentThread}</td>
                        <td>{v.logMessage}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
