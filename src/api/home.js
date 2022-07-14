import request from '@/utils/request'
export const getlunbo = () => {
  return request({
    url: '/home/swiper'
  })
}
export const getTeam = () => {
  return request({
    url: '/home/groups'
  })
}
