import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Header = (props) => {
  console.log("header props ", props)
  const { text } = props
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const Button = (props) => {
  console.log("button props ", props)
  const { onClick, text } = props
  return (
    <button onClick={onClick}>
      {text}
    </button>

  )
}

const Statistic = (props) => {
  const { text, value } = props
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  console.log("feedback props ", props)
  const { all } = props


  if (all === 0) {
    return (
      <div>No Feedback Given</div>
    )
  }
  else {
    const { good, neutral, bad, all, average, positive } = props
    return (
      <div>
        <table>
          <thead>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="all" value={all} />
            <Statistic text="average" value={average} />
            <Statistic text="positive" value={positive + "%"} />
          </thead>
        </table>
      </div>
      // <div>
      //   <div>
      //     good {good}
      //   </div>
      //   <div>
      //     neutral {neutral}
      //   </div>
      //   <div>
      //     bad {bad}
      //   </div>
      //   <div>
      //     all {all}
      //   </div>
      //   <div>
      //     average {average}
      //   </div>
      //   <div>
      //     positive {positive} %
      // </div>
      // </div>
    )
  }
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [scoreArray, setScoreArray] = useState([])

  const reducer = (accumulator, currentValue) => accumulator + currentValue

  const handleGoodClick = () => {
    setGood(good + 1)
    setScoreArray(scoreArray.concat(1))
  }
  console.log("good ", good)

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setScoreArray(scoreArray.concat(0))
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setScoreArray(scoreArray.concat(-1))
  }

  const all = good + neutral + bad

  const average = scoreArray.reduce(reducer, 0) / Math.max(1, scoreArray.length)

  const positive = good / Math.max(all, 1) * 100


  return (
    <div>
      <div>
        <Header text="give feedback"></Header>
        <Button onClick={handleGoodClick} text="good"></Button>
        <Button onClick={handleNeutralClick} text="neutral"></Button>
        <Button onClick={handleBadClick} text="bad"></Button>
      </div>
      <Header text="statistics"></Header>
      <Statistics good={good} bad={bad} neutral={neutral} all={all} average={average} positive={positive} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


