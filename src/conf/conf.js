const env = process.env.NODE_ENV || 'development'

const development = {
  env,
  port: 4005,
  publicPath: 'http://localhost:4004',
  resourcesPath: 'cdn.bootcss.com',
}

const production = Object.assign({}, development, {
  port: 4005,
  publicPath: '/static/assets',
})

export default { development, production }[env]
