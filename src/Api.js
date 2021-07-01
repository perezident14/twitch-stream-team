import axios from 'axios'

let API_KEY = 'o59cafuz33azcvoshbbu883lafaceu'

let api = axios.create({
  headers: {
    'Client-ID' : API_KEY
  }
})

export default api