import axios from 'axios'
import config from './apiconfig.json'

const getPaypalIntegration = async info => {
  const URL = `${config.baseURL}/api/v1/settings/billing/paypal-success?token=EC-2T6882332R5766352`
  const accessToken = sessionStorage.getItem('access_token')

  var form = new FormData()
  var settings = {
    url: URL,
    method: 'GET',
    timeout: 0,
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${accessToken}`
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

export default getPaypalIntegration
