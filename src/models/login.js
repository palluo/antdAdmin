import { routerRedux } from 'dva/router'
import { login } from 'services/login'
import { messageShow } from 'utils/Feedback'
import { setCookie } from 'utils/commonUtils'
// import { Cookies } from 'react-cookie'

export default {
  namespace: 'login',

  state: {
  },

  effects: {
    * login ({
      payload,
    }, { put, call, select }) {
      const data = yield call(login, payload)
      const { locationQuery } = yield select(_ => _.app)
      if (data.success) {
        if (data.code === 200) {
          const { from } = locationQuery
          setCookie('ticket', data.result.ticket);
          setCookie('businessCode', data.result.businessCode);
          console.log(data.result)
          if (from && from !== '/login') {
            yield put(routerRedux.push(from))
          } else {
            yield put(routerRedux.push('/statistics'))
          }
        } else {
          let mess = { message: '错误信息', description: '用户名或密码不对!', type: 'error' }
          messageShow(mess)
        }
      } else {
        throw data
      }
    },
  },
}
