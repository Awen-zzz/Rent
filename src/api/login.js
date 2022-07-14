import request from '@/utils/request'
export const getLogin = ({ username, password }) => request({
  method: 'POST',
  url: '/user/login',
  data: {
    username,
    password
  }
})
