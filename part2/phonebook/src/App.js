import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import { getAll, create, update, remove } from './services/persons'
import Notification from './components/Notification'
import ErrorMessage from './components/ErrorMessage'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('a new name...')
  const [newNumber, setNewNumber] = useState('555-555-5555')
  const [search, setSearch] = useState('')
  const [notification, setNotification] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const fetchPersons = () => {
    getAll()
      .then(persons => {
        setPersons(persons)
        console.log('persons', persons);
      })
  }
  useEffect(fetchPersons, [])

  const addName = (event) => {
    event.preventDefault()
    if (persons.some(entry => entry.name === newName)) {
      const replace = window.confirm(`${newName} is already added to phonebook. Replace the old number with a new one?`)
      if (replace) {
        const person = persons.find(p => p.name === newName)
        const updatedObject = {
          name: person.name,
          number: newNumber
        }

        update(person.id, updatedObject)
          .then(updatedPerson => {
            setPersons(persons.map(p => p.name === updatedPerson.name ? updatedPerson : p))
            setNewName('')
            setNewNumber('')
            setNotification(
              `${person.name}'s number was updated to ${newNumber}`
            )
            setTimeout(() => {
              setNotification(null)
            }, 5000)
          })
          .catch(error => {
            setErrorMessage(
              `Information on ${person.name} has already been removed from server`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
            setPersons(persons.filter(p => p.id !== person.id))
          })
      }
      return
    }

    const newObject = {
      name: newName,
      number: newNumber
    }
    create(newObject)
      .then(person => {
        setPersons(persons.concat(person))
        setNewName('')
        setNewNumber('')
        setNotification(
          `${person.name}'s number was added with number ${newNumber}`
        )
        setTimeout(() => {
          setNotification(null)
        }, 5000)
      })
  }

  const shownNames = search.length > 0
    ? persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
    : persons

  const deleteContact = (id, name) => {
    const confirmed = window.confirm(`'Delete ${name}?`)
    if (!confirmed) return

    else
      remove(id)
        .then(response => {
          setPersons(persons.filter(person => person.id !== id))
        })
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
      <Notification message={notification} />
      <ErrorMessage message={errorMessage} />
      <Filter search={search} handleSearchChange={handleSearchChange} />
      <h2>add a new</h2>
      <PersonForm addName={addName} newName={newName} newNumber={newNumber}
        handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={shownNames} onDeleteClick={deleteContact} />
    </div>
  )
}

export default App