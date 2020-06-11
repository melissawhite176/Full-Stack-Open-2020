import React from 'react'

const Persons = ({showNames}) => {
    return (
        showNames.map(person => <div key={person.name}>{person.name} {person.number}</div>)
    )
}

export default Persons