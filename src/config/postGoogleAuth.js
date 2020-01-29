import axios from 'axios'
import config from './apiconfig.json'
const postGoogleAuth = async info => {
  console.log(info)
  var form = new FormData()
  const URL = `${config.baseURL}/api/v1/social-login`
  const accessToken = sessionStorage.getItem('access_token')

  form.append('email', info.profileObj.email)
  form.append('name', info.profileObj.givenName)
  form.append('provider_return_id', info.Zi.access_token)
  form.append('social_type', '2')

  var settings = {
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
      console.log(res)
      return res
    })
    .catch(err => {
      console.log(err)
      alert('error')
    })
}

export default postGoogleAuth
