import axios from 'axios'

let API_KEY = 'o59cafuz33azcvoshbbu883lafaceu'
let OAUTH_TOKEN = ''

let api = axios.create({
  headers: {
    'Client-ID' : API_KEY,
    'Authorization' : 'Bearer'
  }
})

export default api