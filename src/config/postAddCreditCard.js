import axios from 'axios'
import config from './apiconfig.json'

const postAddCreditCard = async info => {
  const URL = `${config.baseURL}/api/v1/settings/create-customer-credit-card`
  const accessToken = sessionStorage.getItem('access_token')
  console.log(info)
  var settings = {
    url: URL,
    method: 'POST',
    timeout: 0,
    headers: {
      Accept: 'application/json',
      ContentType: 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${accessToken}`
    },
    data: {
      name: info.cardName,
      card_number: info.cardNumber,
      expiry: info.date,
      cvv: info.cvvNum
    }
  }

  return await axios(settings)
    .then(res => {
      console.log(res)
      alert('successfull')
    })
    .catch(err => {
      console.log(err)
    })
}

export default postAddCreditCard
