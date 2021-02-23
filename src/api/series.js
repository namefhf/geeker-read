import request from '../utils/request'
export const getSeries = () => {
  return request({
    method: 'POST',
    url: 'series',
  })
}
