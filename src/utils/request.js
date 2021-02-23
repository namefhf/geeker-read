import axios from 'axios'
import store from '../store'
import router from '../router'
import { Message } from 'element-ui'
const request = axios.create({
  // baseURL: 'https://geeker.devhub.top/v1/api/',
  baseURL: '/api',
})
request.interceptors.request.use(
  (config) => {
    // console.log(store.state.user)
    if (store.state.user) {
      const { token } = store.state.user
      config.headers.Authorization = `Bearer ${token}`
      // config.headers.Authorization =
      //   'Bearer ayJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMDk3YmVkYjliYWYyMzFhYjI4Y2MwYyIsInJvbGUiOiJyZWd1bGFyIiwiaWF0IjoxNjExNTQxMjM0LCJleHAiOjE2MTE2Mjc2MzQsImlzcyI6IkdlZWtlciByZWFkIn0.BIyOnZ9GOfzDaRKrBIFIwLxMsX7gIxKsVgIWmaUQuzc'
    }
    return config
  },
  (err) => {}
)
request.interceptors.response.use(
  (response) => {
    // console.dir(response)
    // console.dir(router.app._route.path)
    const { statusCode, message } = response.data
    if (statusCode === 401) {
      Message.error({
        message: `${statusCode}${message}请重新登录`,
        offset: 40,
      })
      localStorage.removeItem('USER')
      store.commit('setUser', null)
      router.push({ name: 'signin', query: { from: router.app._route.path } })
    }

    return response
  },
  (error) => {
    console.log(error.response)
    const { statusText } = error.response
    const { status } = error.response
    if (status === 400) {
      Message.error({
        message: statusText,
        offset: 40,
      })
      // console.log('400 BAD REQUEST')
      router.push({ path: '/signin' })
    } else if (status === 401) {
      Message.error({
        message: statusText,
        offset: 40,
      })
      router.push({ path: '/signin' })
    } else if (status === 404) {
      Message.error({
        message: statusText,
        offset: 40,
      })
    }
    return Promise.reject(error)
  }
)
export default request
