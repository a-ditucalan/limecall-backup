import axios from 'axios'
import config from './apiconfig.json'

const updateTeamMember = async info => {
  const URL = `${config.baseURL}/api/v1/teams/update-team/${info.idModal}`
  const accessToken = sessionStorage.getItem('access_token')

  var form = new FormData()
  form.append('name', info.columnOne)
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

export default updateTeamMember
