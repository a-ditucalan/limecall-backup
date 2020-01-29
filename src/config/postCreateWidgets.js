import axios from 'axios'
import config from './apiconfig.json'

const postCreateWidgets = async info => {
  const accessToken = sessionStorage.getItem('access_token')

  var settings = {
    url: 'https://app.limecall.com/api/v1/widgets/create',
    method: 'POST',
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

export default postCreateWidgets
