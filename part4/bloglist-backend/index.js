const http = require('http')

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

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify(blogs))
})

const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)