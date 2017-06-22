import portal from './portal'
import logs from './logs'

export default app => {
  portal(app)
  logs(app)
}
