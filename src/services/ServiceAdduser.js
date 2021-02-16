import axios from 'axios'

export const adduser = user => {
  return axios
    .post('users/register', {
      first_name: user.nom,
      last_name: user.prenom,
      email: user.email,
      password: user.password,
      role: user.role 
    })
    .then(response => {
      console.log('Registered !!!!!!!!!!!!!!!!!!!********!!!!!!!!!!!!!!')
    })
}
