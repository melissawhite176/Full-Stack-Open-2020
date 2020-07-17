import React from 'react'

const Blog = ({ blog }) => {
  return (
    <li>
      <b>{blog.title}</b> <br />
      Author: {blog.author} <br />
      URL: {blog.url} <br />
      Likes: {blog.likes} 
    </li>
  )
}

export default Blog