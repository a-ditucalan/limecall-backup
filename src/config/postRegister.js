import axios from 'axios'
import config from './apiconfig.json'

const postRegister = async info => {
  const URL = `${config.baseURL}/api/v1/register-api`

  const form = new FormData()
  form.append('first_name', info.firstname)
  form.append('last_name', info.lastname)
  form.append('password', info.password)
  form.append('password_confirmation', info.confirmpassword)
  form.append('username', info.email)
  form.append('client_id', 2)
  form.append('client_secret', 'KdyMOHLBniB93WUbow5oajQBTCbRD8pdzRrxdAkn')
  form.append('grant_type', 'password')

  const settings = {
    url: URL,
    method: 'POST',
    timeout: 0,
    headers: {
      Accept: 'application/json'
    },
    processData: false,
    mimeType: 'multipart/form-data',
    contentType: false,
    data: form
  }

  await axios(settings)
    .then(res => {
      console.log(res.data)
      alert('successfill')
    })
    .catch(err => {
      console.log(err)
    })
}

export default postRegister
