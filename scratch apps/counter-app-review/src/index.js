import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Display = ({ counter }) => <div>{counter}</div>


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = (props) => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const multiplyByTwo = () => setCounter(counter * 2)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <div>
        <Display counter={counter} />
      </div>
      <div>
        <Button handleClick={increaseByOne}
          text='plus'
        />
        <Button handleClick={decreaseByOne}
          text='minus'
        />
        <Button handleClick={multiplyByTwo}
          text='times 2'
        />
        <Button handleClick={setToZero}
          text='zero'
        />
      </div>
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)