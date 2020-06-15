import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
    console.log('get all promise returned')
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    console.log('create promise returned')
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    console.log('update promise returned')
    const request =  axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)

}

export default { getAll, create, update }