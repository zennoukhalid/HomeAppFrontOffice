import axios from 'axios'
import {config} from './config'

export const login = user => {
  return axios
    .post(config + 'users/login', {
      
      email: user.email,
      password: user.password
      
    })
    
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      // console.log(response.data)
      console.log(user)
      console.log("hello "+ user.email)
      
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}