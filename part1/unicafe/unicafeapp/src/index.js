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
    const setToGoodValue = (newValue) => {
        setGood(newValue)
    }
    const setToNeutralValue = (newValue) => {
        setNeutral(newValue)
    }

    const setToBadValue = (newValue) => {
        setBad(newValue)
    }
    console.log("new bad value", bad)

    return (
        <div>
            <Header header="give feedback" />
            <Button handleClick={() => setToGoodValue(good + 1)} text="good" />
            <Button handleClick={() => setToNeutralValue(neutral + 1)} text="neutral" />
            <Button handleClick={() => setToBadValue(bad + 1)} text="bad" />
            <Header header="statistics" />
            <DisplayGood category="good" good={good} />
            <DisplayNeutral category="neutral" neutral={neutral} />
            <DisplayBad category="bad" bad={bad}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


