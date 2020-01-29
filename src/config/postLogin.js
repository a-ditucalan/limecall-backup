import axios from 'axios'
import config from './apiconfig.json'

const postLogin = async info => {
  const URL = `${config.baseURL}/api/v1/oauth/token`

  const form = new FormData()
  form.append('client_id', 2)
  form.append('client_secret', 'KdyMOHLBniB93WUbow5oajQBTCbRD8pdzRrxdAkn')
  form.append('grant_type', 'password')
  form.append('username', info.email)
  form.append('password', info.password)

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

  return await axios(settings)
    .then(res => {
      return res
    })
    .catch(err => {
      console.log(err)
    })
}

export default postLogin
