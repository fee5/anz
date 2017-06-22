import crypto from 'crypto'
import userStore from '../models/users.json'

const md5 = pwd => crypto.createHash('md5').update(pwd).digest('hex')

export default app => {
  app.post('/api/login', async (req, res) => {
    const account = `${req.body.user.account}`
    const password = `${req.body.user.password}`
    const userFromStore = userStore.find(v => v.username === account)

    if (!userFromStore || userFromStore.password !== md5(password)) {
      const portal = { ...req.session.portal, isLogin: false }
      req.session.portal = portal
      res.status(200).send({ ...portal, pwd: undefined })
    } else {
      const portal = {
        ...userFromStore,
        isLogin: true,
      }
      req.session.portal = portal
      res.status(200).send({ ...portal, pwd: undefined })
    }
  })

  app.post('/api/logout', (req, res) => {
    const portal = { ...req.session.portal, isLogin: false }
    req.session.portal = {}
    res.status(200).send(portal)
  })
}
