import axios from 'axios'
import config from './apiconfig.json'

const getCustomer = async info => {
  const URL = `${config.baseURL}/api/admin/get-customers`
  const accessToken = sessionStorage.getItem('access_token')

  var settings = {
    url: URL,
    method: 'GET',
    timeout: 0,
    headers: {
      ContentType: 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${accessToken}`
    },
    data: {
      user_id: '156',
      name: 'mohamed maged',
      email: 'maged@purple-rain.io',
      password: 'Password',
      password_confirmation: 'Password'
    }
  }
}

export default getCustomer
