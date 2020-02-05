import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <div>
            <h1>
                {props.course}
            </h1>
        </div>

    )
}
const Content = (props) => {
    return (
        <div>
            <Part part={props.part1} exercises={props.exercises1} />
            <Part part={props.part2} exercises={props.exercises2} />
            <Part part={props.part3} exercises={props.exercises3} />
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>
                {props.total}
            </p>
        </div>

    )
}

const Part = (props) => {
    return (
        <p>
            {props.part} {props.exercises}
        </p>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]

    console.log(parts[0].name)
    return (
        <div>
            <Header course={course} />
            <Content part1={parts[0].name} part2={parts[1].name} part3={parts[2].name} exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises} />
            <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
