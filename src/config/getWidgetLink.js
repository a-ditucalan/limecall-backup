import axios from 'axios'
import config from './apiconfig.json'

const getWidgetLink = async info => {
  const accessToken = sessionStorage.getItem('access_token')

  var settings = {
    url:
      'https://app.limecall.com/api/v1/widget-link?key=58&value=eyJpdiI6InFPcGl5UTJiNkJzNHNra1BvZ0h2REE9PSIsInZhbHVlIjoiVWEzXC8xelVUMEc3V2MzMmZMT2ZhbHc9PSIsIm1hYyI6IjdjOTI5MzM3ZTcwOWRkN2YxZjFjNTU4ZjQ5OWJjZjUyNTZjZDZhYzY5MzUxNDljOTNhNDhlMWQwNDAzNDBjYjEifQ%3D%3D',
    method: 'GET',
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

export default getWidgetLink
