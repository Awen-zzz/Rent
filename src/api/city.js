import request from '@/utils/request'
export const getCityList = (q) => {
  return request({
    url: '/area/city',
    params: { level: q }
  })
}
