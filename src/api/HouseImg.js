import request from '@/utils/request'
export const uploadFile = ({ ContentType, file }) => {
  return request({
    method: 'POST',
    url: '/houses/image',
    data: {
      ContentType, file
    }
  })
}
