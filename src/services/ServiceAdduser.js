import axios from 'axios'
import {config} from './config'

export const adduser = user => {
  console.log("user in service",user);
  return axios
    .post(config+'users/register', {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
      role: user.role,
      urlPhoto: user.urlPhoto
    })
    .then(response => {
      console.log(' Registered !!!!!!!!!!!!!!!!!!!********!!!!!!!!!!!!!!')
    })
}
