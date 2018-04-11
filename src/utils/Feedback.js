import { notification } from 'antd'

const  messageShow = (params) => {
  notification[params.type] ({
    message: params.message,
    description: params.description,
  })
}
module.exports = {
  messageShow,
}