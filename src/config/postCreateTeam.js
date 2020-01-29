import axios from 'axios'
import config from './apiconfig.json'

const postCreateTeam = async info => {
  const URL = `${config.baseURL}/api/v1/teams/create-team`
  const accessToken = sessionStorage.getItem('access_token')

  var form = new FormData()
  form.append('name', info)

  var settings = {
    url: URL,
    method: 'POST',
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

  await axios(settings)
    .then(res => {
      console.log(res.data)
      alert('successfill')
    })
    .catch(err => {
      console.log(err)
    })
}

export default postCreateTeam
