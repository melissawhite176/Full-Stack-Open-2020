import React, { useState } from 'react';
import ReactDOM from 'react-dom';

//component for display
const DisplayGood = (props) => (
    <div>{props.category} {props.good}</div>
)
const DisplayNeutral = (props) => (
    <div>{props.category} {props.neutral}</div>
)
const DisplayBad = (props) => (
    <div>{props.category} {props.bad}</div>
)

//component for two headers
const Header = props => <h1>{props.header}</h1>

//component for three buttons
const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
)



const App = () => {
    //save clicks of each buton to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    //set new value
    const setToGoodValue = () => setGood(good + 1)

    const setToNeutralValue = () => setNeutral(neutral + 1)

    const setToBadValue = () => setBad(bad + 1)

    return (
        <div>
            <Header header="give feedback" />
            <Button handleClick={setToGoodValue} text="good" />
            <Button handleClick={setToNeutralValue} text="neutral" />
            <Button handleClick={setToBadValue} text="bad" />
            <Header header="statistics" />
            <DisplayGood category="good" good={good} />
            <DisplayNeutral category="neutral" neutral={neutral} />
            <DisplayBad category="bad" bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


