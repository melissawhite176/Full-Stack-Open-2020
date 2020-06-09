import React, { useState } from 'react';
import ReactDOM from 'react-dom';

//part 1c Component state, event handlers

//**Greeting App**

// const Hello = ({ name, age }) => {

//     const bornYear = () => new Date().getFullYear() - age

//     return (
//         <div>
//             <p>Hello {name}, you are {age} years old</p>
//             <p>So you were probably born in {bornYear()}</p>
//         </div>
//     )
// }


// const App = () => {
//     const name = 'Peter'
//     const age = 10

//     return (
//         <div>
//             <h1>Greetings</h1>
//             <Hello name="Maya" age={26 + 10} />
//             <Hello name={name} age={age} />
//         </div>
//     )
// }

// ReactDOM.render(<App />, document.getElementById('root'));

//**End of Greeting App**


const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
    </button>
)

const App = (props) => {
    const [counter, setCounter] = useState(0)
    const setToValue = (value) => setCounter(value)

    return (
        <div>
            <Display counter={counter} />
            <Button
                onClick={() => setToValue(counter + 1)}
                text='plus'
            />
            <Button onClick={() => setToValue(counter - 1)}
                text='minus'
            />
            <Button onClick={() => setToValue(0)}
                text='zero'
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


//**Counter App**

//*Section: Passing state to child components

//*Section: tateful component*
// const App = (props) => {
//     const [ counter, setCounter ] = useState(0)

//     setTimeout(
//         () => setCounter(counter + 1),
//         1000
//     )

//     return ( 
//         <div>{counter}</div>
//     )
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )


//*Section: Event handlers; Event handlers are functions
// const App = (props) => {
//     const [counter, setCounter] = useState(0)

//     //event handler function
//     const setToValue = (value) => () => setCounter(value)

//     return (
//         <div>
//             <div>{counter}</div>
//             <button onClick={setToValue(counter + 1)}>
//                 plus
//             </button>
//             <button onClick={setToValue(0)}>
//                 zero
//             </button>
//         </div>
//     )
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )





//*Section: Page re-rendering 
// const App = (props) => {
//     const {counter} = props
//     return (
//         <div>{counter}</div>
//     )
// }

// let counter = 1

// const refresh = () => {
//     ReactDOM.render(<App counter={counter} />,
//         document.getElementById('root'))
// }

// refresh()
// counter += 1
// refresh()
// counter += 1
// refresh()

//**End of Counter App**




