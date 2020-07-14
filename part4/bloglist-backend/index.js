const express = require('express')
const { request, response } = require('express')
const app = express()

//json parser middleware
app.use(express.json())

let blogs = [
  {
    id: 1,
    title: "Delicious Desserts Blog",
    author: "Joanna Goodman",
    url: "https://www.google.com",
    likes: 4
  },
  {
    id: 2,
    title: "Tasty Treats Blog",
    author: "Norton Oswald",
    url: "https://www.wikipedia.com",
    likes: 6
  },
  {
    id: 3,
    title: "DIY Furniture Blog",
    author: "Virginia Woolf",
    url: "https://www.fullstackopen.com",
    likes: 10
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/blogs', (request, response) => {
  response.json(blogs)
})

app.get('/api/blogs/:id', (request, response) => {
  const id = Number(request.params.id)
  const blog = blogs.find(blog => {
    return blog.id === id
  })
  if (blog) {
    response.json(blog)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/blogs/:id', (request, response) => {
  const id = Number(request.params.id)
  blogs = blogs.filter(blog => blog.id !== id)

  response.status(204).end()
})

const generateId = () => {
  const maxId = blogs.length > 0
    ? Math.max(...blogs.map(n => n.id))
    : 0
  return maxId + 1
}

app.post('/api/blogs', (request, response) => {
  const body = request.body

  if (!body.title || !body.author || !body.url || !body.likes) {
    return response.status(400).json({
      error: 'title, author, url, or number of likes missing'
    })
  }

  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    id: generateId(),
  }

  console.log('blog:', blog)

  blogs = blogs.concat(blog)

  response.json(blog)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

//middleware that prints information about every request 
//that is sent to the server (middleware receives these three parameters)
const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path: ', request.path)
  console.log('Body: ', request.body)
  console.log('---')
  next()
}
app.use(requestLogger)

//middleware used for catching requests made to non-existent routes
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)