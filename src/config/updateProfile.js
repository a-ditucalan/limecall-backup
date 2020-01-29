import axios from 'axios'
import config from './apiconfig.json'

const updateProfile = async info => {
  const URL = `${config.baseURL}/api/v1/customers/update-profile`
  var form = new FormData()
  form.append('password', 'sh.HARBR7')
  form.append('password_confirmation', 'sh.HARBR7')
  form.append('old_password', 'sh.HARBR7')
  form.append('name', 'momam')

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
      return res
    })
    .catch(err => {
      console.log(err)
    })
}

export default updateProfile
