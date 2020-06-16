import React from 'react'

const Persons = ({ persons, onDeleteClick }) => (
    persons.map(person => (
        <div key={person.id}>
            {person.name} {person.number}
            <button onClick={() => onDeleteClick(person.id, person.name)}>delete</button>
        </div>
    )
))

export default Persons