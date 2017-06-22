import render from '../render.jsx'

export default app => {
  app.get('/', (req, res) => {
    res.send(
      render({
        req,
        res,
        title: 'Home',
        location: req.url,
      }),
    )
  })

  app.get('/portal', (req, res) => {
    res.send(
      render({
        req,
        res,
        title: 'Login',
        location: req.url,
      }),
    )
  })

  app.get('/dashboard', (req, res) => {
    res.send(
      render({
        req,
        res,
        title: 'Dashboard',
        location: req.url,
      }),
    )
  })

  app.get('/userInfo', (req, res) => {
    res.send(
      render({
        req,
        res,
        title: '加盟商信息',
        location: req.url,
      }),
    )
  })

  app.get('/playerRecharges', (req, res) => {
    res.send(
      render({
        req,
        res,
        title: '玩家充值',
        location: req.url,
      }),
    )
  })

  app.get('/analytics', (req, res) => {
    res.send(
      render({
        req,
        res,
        title: '统计信息',
        location: req.url,
      }),
    )
  })
}
