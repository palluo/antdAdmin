import { request, config } from 'utils'

const { api } = config
const { userLogin, userLogout, getUser } = api

export async function login (params) {
  return request({
    url: userLogin,
    method: 'post',
    data: params,
  })
}

export async function logout (params) {
  return request({
    url: userLogout,
    method: 'get',
    data: params,
  })
}

export async function query (params) {
  return request({
    url: getUser,
    method: 'get',
    data: params,
  })
}
