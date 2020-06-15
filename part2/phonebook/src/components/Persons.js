import React from 'react'

const Persons = ({showNames, onDeleteClick}) => {
    console.log('showNames', showNames)
    return (
        <li>
        {showNames.map(person => <div key={person.name}>{person.name} {person.number} <button onClick={() => onDeleteClick(person.id, person.name)}>delete</button></div>)}
        </li>
    )
}

export default Persons