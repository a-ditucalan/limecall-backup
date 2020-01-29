import axios from 'axios'
import config from './apiconfig.json'

const postLogout = async info => {
  const URL = `${config.baseURL}/api/v1/logout`
  const accessToken = sessionStorage.getItem('access_token')

  var form = new FormData()
  var settings = {
    url: URL,
    method: 'POST',
    timeout: 0,
    headers: {
      Accept: 'application/json',
      ContentType: 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${accessToken}`
    },
    processData: false,
    mimeType: 'multipart/form-data',
    contentType: false,
    data: form
  }
  return await axios(settings)
    .then(res => {
      console.log(res.data)
      alert('successfill')
    })
    .catch(err => {
      console.log(err)
    })
}

export default postLogout
