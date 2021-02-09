import {request} from '@/plugins/request'

export const getArticles = (params) => request({
  method: 'get',
  url: '/api/articles',
  params
})

export const getFeedArticles = (params) => request({
  method: 'get',
  url: '/api/articles/feed',
  params
})

export const createArticles = (data) => request({
  method: 'post',
  url: '/api/articles',
  data
})

export const updateArticles = (data) => request({
  method: 'put',
  url: '/api/articles/:slug',
  data
})

// 获取文章详情
export const getArticle = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}`
  })
}
// 获取文章评论
export const getComments = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  })
}

// 添加点赞
export const addFavorite = slug => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  })
}

// 取消点赞
export const deleteFavorite = slug => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  })
}