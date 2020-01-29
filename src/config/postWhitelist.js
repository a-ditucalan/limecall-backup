import axios from 'axios'
import config from './apiconfig.json'

const postWhitelist = async (info, wid) => {
  const URL = `${config.baseURL}/api/admin/add-whitelist-country`
  const accessToken = sessionStorage.getItem('access_token')

  console.log(info, wid)
  var settings = {
    url: URL,
    method: 'POST',
    timeout: 0,
    headers: {
      ContentType: 'application/json',
      Authorization: `Bearer ${accessToken}`
    },
    data: {
      name: info.name,
      dial_code: info.dialCode,
      code: info.iso2,
      widget_id: wid
    }
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

export default postWhitelist
