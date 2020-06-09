import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  const { name, age } = props

  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>
        So you were probably born in {bornYear()}
      </p>
    </div>
  )
}

const App = () => {
  const props = {
    name: 'Arto Hellas',
    age: 35
  }
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={props.name} age={props.age} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));

