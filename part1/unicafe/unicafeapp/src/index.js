import React, { useState } from 'react';
import ReactDOM from 'react-dom';

//component for display
const DisplayGood = ({ category, good }) => (
    <div>{category} {good}</div>
)
const DisplayNeutral = ({ category, neutral }) => (
    <div>{category} {neutral}</div>
)
const DisplayBad = ({ category, bad }) => (
    <div>{category} {bad}</div>
)
const DisplayTotal = ({ category, total }) => (
    <div>{category} {total}</div>
)
// const DisplayAverage = ({category, average}) => (
//     <div>{category} {average || 0}</div>
// )
// const DisplayPositivePercent = ({category, positive}) => (
//     <div>{category} {positive || 0}%</div>
// )

//component for two headers
const Header = ({ header }) => <h1>{header}</h1>

//component for three buttons
const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
)

//component for statistics
const Statistics = ({ category, statistic, text }) => {

    return (
        <div>
            {category} {statistic || 0} {text}
    </div>
    )
}



const App = () => {
    //save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    //set new value
    const setToGoodValue = () => {
        setGood(good + 1)
    }

    const setToNeutralValue = () => {
        setNeutral(neutral + 1)
    }

    const setToBadValue = () => {
        setBad(bad + 1)
    }
    const total = good + neutral + bad

    const average = (good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)

    const positive = good / (good + neutral + bad) * 100 


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
            <DisplayTotal category="all" total={total} />
            <Statistics category="average" statistic={average} text=""/>
            <Statistics category="positive" statistic={positive} text="%" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


