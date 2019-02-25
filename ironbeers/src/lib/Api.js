import axios from 'axios';

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://ironbeer-api.herokuapp.com/beers',
    })
  }
  getAllBeers() {
    return this.api.get('/all')
      .then(({ data }) => {
        return data
      })
  }
  showBeerDetails(id) {
    return this.api.get(`/single/${id}`)
      .then(({ data }) => {
        return data
      })
  }

  randomBeer() {
    return this.api.get('/random')
      .then(({ data }) => {
        return data
      })
  }
  // createPhone(body) {
  //   return this.api.post('/phones', body)
  // }


}



const apiInstance = new Api();

export default apiInstance;