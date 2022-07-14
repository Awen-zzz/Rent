import request from '@/utils/request'
export const getCollect = () => {
  return request({
    url: '/user/favorites'
  })
}
