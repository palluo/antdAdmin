const { config } = require('./common')

const { apiPrefix } = config
let database = [
  {
    id: '1',
    icon: 'pie-chart',
    name: '监控',
    route: '/dashboard',
  }, {
    id: '2',
    name: '微信管理',
    icon: 'home',
    route: '/weiMange',
  },
]

module.exports = {

  [`GET ${apiPrefix}/menus`] (req, res) {
    res.status(200).json(database)
  },
}
