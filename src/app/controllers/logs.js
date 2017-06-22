import log from '../models/logs'

export default app => {
  app.get('/api/getlogs', async (req, res) => {
    res.send(log)
  })
}
