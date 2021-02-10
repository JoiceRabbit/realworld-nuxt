import axios from 'axios'

export const request = axios.create({
  baseURL: 'https://conduit.productionready.io/'
  // baseURL: "http://realworld.api.fed.lagounews.com"
})

// 通过插件机制获取到上下文对象（query、params、req、res、app、store...）
// 插件导出函数必须作为 default 成员
export default ({ store }) => {
  request.interceptors.request.use((config) => {
    const user = store.state.user;

    if (user && user.token) {
      config.headers.Authorization = `Token ${user.token}`
    }

    return config;
  }, (err) => {
    return Promise.reject(err)
  }) 


  request.interceptors.response.use(res => {
    if (res.status === 200) {
      return res
    } else {
      return Promise.reject(res)
    }
  }, error => {
    return Promise.reject(error)
  })
}