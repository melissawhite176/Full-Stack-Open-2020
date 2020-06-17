const express = require('express')
const app = express()

let persons = [
    {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1
    },
    {
        name: "Ada Lovelace",
        number: "39-44-543235",
        id: 2
    },
    {
        name: "Dan Abramov",
        number: "12-43-234234",
        id: 3
    },
    {
        name: "Mary Poppendieck",
        number: "39-23-632122",
        id: 4
    }
]

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/info', (req, res) => {
    const info = persons.length
    const date = new Date()
    console.log(typeof info)
    res.send(`Phonebook has info for ${info} people<br><br>
    ${date}`)

})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(note => note.id !== id)
  
    response.status(204).end()
  })


const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)