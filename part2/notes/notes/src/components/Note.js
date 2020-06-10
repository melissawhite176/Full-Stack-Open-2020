import React from 'react'

const Note = (props) => {
    const { note } = props
    return (
      <li>
        {note.content}
      </li>
    )
  }

  export default Note