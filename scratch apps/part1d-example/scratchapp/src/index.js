import React, { useState } from 'react';
import ReactDOM from 'react-dom';

//A more complex state, debugging React apps - clicker app

//Part 1
// const App = (props) => {
//     const [left, setLeft] = useState(0)
//     const [right, setRight] = useState(0)

//     return (
//         <div>
//             <div>
//                 {left}
//                 <button onClick={() => setLeft(left + 1)}>
//                     left
//                 </button>
//                 <button onClick={() => setRight(right + 1)}>
//                     right
//                 </button>
//                 {right}
//             </div>
//         </div>
//     )
// }

// ReactDOM.render(<App />, document.getElementById('root'));


//Part 2
// const App = (props) => {
//     const [clicks, setClicks] = useState({
//         left: 0, right: 0
//     })

//     const handleLeftClick = () => 
//         setClicks({ ...clicks, left: clicks.left + 1 })

//     const handleRightClick = () => 
//         setClicks({ ...clicks, right: clicks.right + 1 })


//     return (
//         <div>
//             <div>
//                 {clicks.left}
//                 <button onClick={handleLeftClick}>left</button>
//                 <button onClick={handleRightClick}>right</button>
//                 {clicks.right}
//             </div>
//         </div>
//     )
// }

// ReactDOM.render(<App />, document.getElementById('root'));




//Part 3- Handling Arrays, conditional rendering

// const History = (props) => {
//     if (props.allClicks.length === 0) {
//         return (
//             <div>
//                 the app is used by pressing the buttons
//             </div>
//         )
//     }
//     return (
//         <div>
//             button press history: {props.allClicks.join(' ')}
//         </div>
//     )
// }

// const Button = ({ onClick, text }) => (
//     <button onClick={onClick}>
//         {text}
//     </button>
// )

// const App = (props) => {
//     const [left, setLeft] = useState(0)
//     const [right, setRight] = useState(0)
//     const [allClicks, setAll] = useState([])

//     const handleLeftClick = () => {
//         setAll(allClicks.concat('L'))
//         setLeft(left + 1)
//     }

//     const handleRightClick = () => {
//         setAll(allClicks.concat('R'))
//         setRight(right + 1)
//     }

//     return (
//         <div>
//             <div>
//                 {left}
//                 <Button onClick={handleLeftClick} text='left' />
//                 <Button onClick={handleRightClick} text='right'/>
//                 {right}
//                 <History allClicks={allClicks}/>
//             </div>
//         </div>
//     )
// }

// ReactDOM.render(<App />, document.getElementById('root'));



//Part 6- Do Not Define Components Within Components

const Display = props => <div>{props.value}</div> //this is the correct way (wrong way is to define in the App component)

const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
)

const App = props => {
    const [value, setValue] = useState(10)

    const setToValue = (newValue) => {
        setValue(newValue)
    }

    return (
        <div>
            <Display value ={value} />
            <Button handleClick={() => setToValue(1000)} text="thousand" />
            <Button handleClick={() => setToValue(0)} text="reset" />
            <Button handleClick={() => setToValue(value + 1)} text="increment" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));