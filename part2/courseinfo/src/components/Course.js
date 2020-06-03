import React from 'react'

const Header = ({ name }) => (
    <h2>
        {name}
    </h2>
)

const Part = ({ part, exercises }) => (
    <p>
        {part} {exercises}
    </p>
)

const Content = ({ course }) => course.parts.map(part =>
    <Part key={part.id} part={part.name} exercises={part.exercises} />
)


const Course = ({ course }) => {
    return (
        <>
            <Header name={course.name} />
            <Content course={course} />
        </>
    )
}

export default Course