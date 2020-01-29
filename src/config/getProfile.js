import axios from 'axios'
import config from './apiconfig.json'

const getProfile = async info => {
  const URL = `${config.baseURL}/api/v1/customers/profile`
  const accessToken = sessionStorage.getItem('access_token')

  var settings = {
    url: URL,
    method: 'GET',
    timeout: 0,
    headers: {
      Accept: 'application/json',
      ContentType: 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${accessToken}`
    }
  }

  return await axios(settings)
    .then(res => {
      return res
    })
    .catch(err => {
      console.log(err)
    })
}

export default getProfile
