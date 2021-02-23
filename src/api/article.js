import request from '../utils/request'
//获取小编推荐
export const getRecommend = () => {
  return request({
    method: 'GET',
    url: 'articles/editor/recommended',
  })
}
// 获取首页文章列表 https://geeker.devhub.top/v1/api/articles/hot
export const getHot = () => {
  return request({
    method: 'POST',
    url: 'articles/hot',
  })
}
// 获取热门页面的news newsleeter series videos
export const getFacets = () => {
  return request({
    method: 'GET',
    url: 'articles/facets',
  })
}
//获取最新文章
export const getLatest = (data) => {
  return request({
    method: 'POST',
    url: 'articles/latest',
    data,
  })
}
// 喜欢操作
export const like = (id) => {
  return request({
    method: 'POST',
    url: `articles/like/${id}`,
    data: { value: 1 },
  })
}
//获取视频页列表
export const getVideos = () => {
  return request({
    method: 'POST',
    url: 'articles/video',
  })
}
//获取专栏详情页数据
export const getSeries = (id) => {
  return request({
    method: 'POST',
    url: 'articles/series',
    data: {
      seriesId: id,
    },
  })
}
//获取书库列表
export const getBooks = () => {
  return request({
    method: 'POST',
    url: 'articles/book',
  })
}
//获取搜索结果
export const getSearch = (keyword) => {
  return request({
    method: 'POST',
    url: 'articles/search',
    data: {
      keyword: keyword,
      strict: false,
    },
  })
}
//获取已关注话题的文章
export const getFollowingArticle = (data) => {
  return request({
    method: 'POST',
    url: 'articles/following',
    data,
  })
}
