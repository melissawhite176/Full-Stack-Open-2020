import React from 'react'
import ReactDOM from 'react-dom'


const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

const App = () => {
  const name = "Peter"
  const age = 10

  return (
    <>
      <div>
        <h1>Greetings</h1>
        <Hello name="George" age={14} />
        <Hello name="Daisy" age={12} />
        <Hello name={name} age={age} />
        <Footer />
      </div>
    </>
  )
}



ReactDOM.render(<App />, document.getElementById('root'))