import React, {useState, useEffect} from 'react'
import Blog from './components/Blog'
import axios from 'axios'

const App = () => {
  const [blogs, setBlogs] = useState([])
  
  useEffect(() => {
    console.log('effect')
    axios 
      .get('http://localhost:3001/blogs')
      .then(response => {
        console.log('promise fulfilled')
        setBlogs(response.data)
      })
  }, [])
  console.log('render', blogs.length, 'blogs')

  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} />
        )}
      </ul>
    </div>
  )
}

export default App