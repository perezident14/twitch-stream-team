import axios from 'axios'

let api = axios.create({
  headers: {
    'Client-ID' : 'o59cafuz33azcvoshbbu883lafaceu'
  }
})

export default api