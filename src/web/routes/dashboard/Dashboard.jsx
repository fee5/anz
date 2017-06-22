import React, { PureComponent } from 'react'
import { PieChart, Pie, Sector, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

function groupBy(xs, key) {
  return xs.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x)
    return rv
  }, {})
}

export default class Home extends PureComponent {
  state = {
    filter: '',
  }

  componentDidMount() {
    if(this.props.logs.length < 1) {
      this.props.getLogs()
    }
  }

  handleFilter = e => {
    this.setState({
      filter: e.target.value,
    })
  }

  render() {
    const { logs: rawLogs } = this.props


    const logs = rawLogs.map(v => ({ ...v, timestamp: v.timestamp.split(' ')[0] }))

    let data = {}
    const gData = groupBy(logs, 'timestamp')

    Object.keys(gData).map(timestamp => {
      if (!data[timestamp]) {
        data[timestamp] = {}
      }
      gData[timestamp].map(v => {
        if (!data[timestamp][v.logLevel]) {
          data[timestamp][v.logLevel] = 1
        } else {
          data[timestamp][v.logLevel] += 1
        }
      })
    })

    data = Object.keys(data).map(key => {
      return {
        timestamp: key,
        ...data[key],
      }
    }).sort((a, b) => a.timestamp >= b.timestamp ? 1 : -1)

    let pieData = {
      INFO: logs.filter(v => v.logLevel === 'INFO').length,
      DEBUG: logs.filter(v => v.logLevel === 'DEBUG').length,
      WARN: logs.filter(v => v.logLevel === 'WARN').length,
      ERROR: logs.filter(v => v.logLevel === 'ERROR').length,
      FATAL: logs.filter(v => v.logLevel === 'FATAL').length,
    }

    pieData = Object.keys(pieData).map(v => {
      return {
        name: v,
        value: pieData[v],
      }
    })

    const COLORS = ['#5587C1', '#A0BF5F', 'yellow', 'orange', '#C45653']


    return (
      <div>
        <div className="breadcrumbs">
          <div className="ctn">
            Dashboards
          </div>
        </div>
        <div className="ctn" style={{ marginTop: '40px' }}>
          <div className="chart-ctn cf">
            <div className="">
              <h3 className="ta-center">Log Types</h3>
              <div className="pie-info ta-center">
                <span><span className="color-label-span" style={{ background: '#5587C1' }} />INFO</span>
                <span><span className="color-label-span" style={{ background: '#A0BF5F' }} />DEBUG</span>
                <span><span className="color-label-span" style={{ background: 'yellow' }} />WARN</span>
                <span><span className="color-label-span" style={{ background: 'orange' }} />ERROR</span>
                <span><span className="color-label-span" style={{ background: '#C45653' }} />FATAL</span>

              </div>
              <PieChart width={500} height={500}>
                <Pie data={pieData} cx={250} cy={250} outerRadius={160} fill="#f00">
                  {
                    data.map((name, value) => <Cell fill={COLORS[value % COLORS.length]} />)
                  }
                </Pie>
              </PieChart>
            </div>
            <div className="">
              <h3 className="ta-center" style={{ marginBottom: 150 }}>Logs Over Time</h3>
              <LineChart
                width={500}
                height={300}
                data={data}
              >
                <XAxis dataKey="timestamp" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="INFO" stroke="#5587C1" />
                <Line type="monotone" dataKey="DEBUG" stroke="#A0BF5F" />
                <Line type="monotone" dataKey="ERROR" stroke="#C45653" />
              </LineChart>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
