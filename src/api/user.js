import request from '../utils/request'
//用户登录
export const signIn = (data) => {
  return request({
    method: 'POST',
    url: 'user/signin',
    data, //{"account":"",password:""}
  })
}
//获取关注的话题
export const getFolloingTopic = () => {
  return request({
    method: 'GET',
    url: 'user/following',
  })
}
//保存关注的话题

export const saveFollowingTopic = (data) => {
  return request({
    method: 'PUT',
    url: 'user/following/topics',
    data,
  })
}
// 获取所有我喜欢的内容
export const getFavorites = () => {
  return request({
    method: 'POST',
    url: 'user/articles/v2',
    data: {
      isLiked: true,
    },
  })
}
