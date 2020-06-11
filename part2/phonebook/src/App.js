import React, { useState } from 'react'

const Person = ({ person }) => {
  return (
    <li>{person.name}</li>
  )

}

const App = (props) => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('a new name...')


  const addName = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName
    }

    if (persons.some(person => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`)
      return
    }
    
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name:
            <input
            value={newName}
            onChange={handleNameChange}
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, i) =>
        <Person key={i} person={person} />
        )}
      </ul>
    </div>
  )
}

export default App