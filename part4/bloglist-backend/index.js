const express = require('express')
const app = express()

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
  console.log('id:', id)
  const blog = blogs.find(blog => {
    console.log(blog.id, typeof blog.id, typeof id, blog.id === id)
    return blog.id === id
  })
  console.log('blog:', blog)
  response.json(blog)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})