
const getCookie = (name) => {
  let arr
  let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  arr = document.cookie.match(reg)
  if (arr) {
    return unescape(arr[2])
  }
  return null
}
const setCookie = (name, value, time) => {
  time = time || 60
  let exp = new Date()
  exp.setTime(exp.getTime() + time * 60 * 1000)
  document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString()
}

const delCookie = (name) => {
  let exp = new Date();
  exp.setTime(exp.getTime() - 1)
  let cval = getCookie(name)
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
  }
}
module.exports = {
  getCookie,
  setCookie,
  delCookie,
}