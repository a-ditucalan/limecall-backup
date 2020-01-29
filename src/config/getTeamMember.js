import axios from 'axios'
import config from './apiconfig.json'

const getTeamMember = async info => {
  const URL = `${config.baseURL}/api/v1/teams`
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

export default getTeamMember
