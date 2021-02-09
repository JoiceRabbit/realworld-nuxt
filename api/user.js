import {request} from '@/plugins/request'

export const userLogin = (data) => request({
  method: 'post',
  url: '/api/users/login',
  data
})

export const userRegiste = (data) => request({
  method: 'post',
  url: '/api/users',
  data
})