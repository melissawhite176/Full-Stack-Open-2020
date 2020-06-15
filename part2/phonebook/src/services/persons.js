import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    console.log('get all promise returned')
    return axios.get(baseUrl)
}

const create = newObject => {
    console.log('create promise returned')
    return axios.post(baseUrl, newObject)
}


export default { getAll, create }