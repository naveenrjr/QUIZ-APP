import axios from 'axios'
const baseUrl = 'https://opentdb.com/api.php?amount=20&category=22&type=multiple'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response=>response.data);
}

export default {getAll};