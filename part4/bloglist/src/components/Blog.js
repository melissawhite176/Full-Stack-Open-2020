import React from 'react'

const Blog = ({ blog }) => {
  return (
    <li>
      {blog.title}
      {blog.author}
      {blog.url}
      {blog.likes}
    </li>
  )
}

export default Blog