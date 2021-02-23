import request from '../utils/request'
//获取官方微博数据
export const getTimeline = (data) => {
  return request({
    method: 'POST',
    url: 'tweet/timeline',
    data, //{id: 7447468124, limit: 8}
  })
}
