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
            <Part parts={props.parts[0]}/>
            <Part parts={props.parts[1]}/>
            <Part parts={props.parts[2]}/>
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>
                {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
            </p>
        </div>

    )
}

const Part = (props) => {
    return (
        <p>
            {props.parts.name} 
            {props.parts.exercises}
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
    

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
