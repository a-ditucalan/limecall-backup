import axios from 'axios'
import config from './apiconfig.json'

const getScript = async info => {
  const URL = `${config.baseURL}/api/v1/widgets`
  const accessToken = sessionStorage.getItem('access_token')

  const settings = {
    url: URL,
    method: 'GET',
    timeout: 0,
    headers: {
      Accept: 'application/json',
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

export default getScript
