import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://theburgerbuilder-4b0a1.firebaseio.com/'
})

export default instance