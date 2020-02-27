import React, { useState } from 'react';
import ReactDOM from 'react-dom';


//component for two headers
const Header = ({ header }) => <h1>{header}</h1>

//component for three buttons
const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
)

const Buttons = ({ setToGoodValue, setToNeutralValue, setToBadValue }) => {
    return (
        <div>
            <Button handleClick={setToGoodValue} text="good" />
            <Button handleClick={setToNeutralValue} text="neutral" />
            <Button handleClick={setToBadValue} text="bad" />
        </div>
    )
}

//component for statistics
const Statistic = ({ category, statistic, symbol }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        {category}
                    </td>
                    <td>
                        {statistic || 0}
                    </td>
                    <td>
                        {symbol}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
    if (total > 0) {
        return (
            <div>
                <Statistic category="good" statistic={good} symbol="" />
                <Statistic category="neutral" statistic={neutral} symbol="" />
                <Statistic category="bad" statistic={bad} symbol="" />
                <Statistic category="all" statistic={total} symbol="" />
                <Statistic category="average" statistic={average} symbol="" />
                <Statistic category="positive" statistic={positive} symbol="%" />
            </div>
        )
    } else {
        return <p>No feedback given</p>
    }
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
            <Buttons setToGoodValue={setToGoodValue} setToNeutralValue={setToNeutralValue} setToBadValue={setToBadValue} />
            <Header header="statistics" />
            <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


