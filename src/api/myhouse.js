import request from '@/utils/request'
export const getMyHouse = () => {
  return request({
    url: 'user/houses'
  })
}
// 整租
export const getRentType = (rentType) => {
  return request({
    url: '/houses'
  })
}
