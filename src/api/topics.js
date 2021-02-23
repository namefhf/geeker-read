import request from '../utils/request'
//获取侧边栏话题
export const getTopics = () => {
  return request({
    method: 'GET',
    url: 'topics?limit=20',
  })
}
//获取关注页全部话题
export const getAllTopics = () => {
  return request({
    method: 'GET',
    url: 'topics?limit=-1',
  })
}
