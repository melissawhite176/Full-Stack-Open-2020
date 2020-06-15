import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('a new name...')
  const [newNumber, setNewNumber] = useState('555-555-5555')
  const [search, setSearch] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    if (persons.some(person => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`)
      return
    }
    else {
      personService
        .create(personObject)
        .then(response => {
          console.log(response)
          setPersons(persons.concat(personObject))
          setNewName('')
          setNewNumber('')
          console.log(`contact name ${newName} with number ${newNumber} created`)
        })
    }
  }

  const showNames = search.length > 0
    ? persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
    : persons

  const deleteContact = (id, name) => {
    const confirmed = window.confirm(`'Delete ${name}?`)
    if (!confirmed) return

    else {
      personService
        .remove(id)
        .then(response => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }




  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearchChange={handleSearchChange} />
      <h2>add a new</h2>
      <PersonForm addName={addName} newName={newName} newNumber={newNumber}
        handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons showNames={showNames} onDeleteClick={deleteContact} />
    </div>
  )
}

export default App