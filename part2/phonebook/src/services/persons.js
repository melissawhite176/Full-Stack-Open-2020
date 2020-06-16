import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    console.log('get all promise returned')
    return axios.get(baseUrl)
        .then(response => response.data)
}

const create = newObject => {
    console.log('create promise returned')
    return axios.post(baseUrl, newObject)
    .then(response => response.data)
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
        .then(response => response.data)
}

const remove = (id) => {
    console.log('delete promise returned')
    return axios.delete(`${baseUrl}/${id}`)
        .then(response => response.data)
}

export { getAll, create, update, remove }