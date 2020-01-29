import axios from 'axios'
import config from './apiconfig.json'

const postStyleWidget = async info => {
  const URL = `${config.baseURL}/api/v1/register-api`
  var settings = {
    url: URL,
    method: 'POST',
    timeout: 0,
    headers: {
      ContentType: 'application/json',
      Accept: 'application/json'
    },
    data: {
      widget_id: '122',
      widget_text: 'test widget text',
      language: 'english',
      color: 'F78DA7',
      bubble_text: 'can we help you today ?',
      bubble_position: 'top_right'
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

export default postStyleWidget
