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

app.post('/api/blogs', (request, response) => {
  const blog = request.body
  console.log('blog:', blog)

  response.json(blog)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})