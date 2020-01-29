import axios from 'axios'
import config from './apiconfig.json'

const getWidgetSettings = async info => {
  var settings = {
    url:
      'https://app.limecall.com/api/widget/$2y$10$jGTSgmckGvWiQox5kbXj9.vnJAIMy2SPup2uweI7MrCdDz1j82h7e/settings',
    method: 'GET',
    timeout: 0,
    headers: {
      Accept: 'application/json'
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

export default getWidgetSettings
