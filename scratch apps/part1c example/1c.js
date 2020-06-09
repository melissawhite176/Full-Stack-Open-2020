//part 1c Component state, event handlers

const Hello = ({ name, age }) => {

    const bornYear = () => new Date().getFullYear() - age
    
    return (
        <div>
            <p>Hello {name}, you are {age} years old</p>
            <p>So you were probably born in {bornYear()}</p>
        </div>
    )
}


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

const App = (props) => {
    const {counter} = props
    return ( 
        <div>{counter}</div>
    )
}
let counter = 1

// ReactDOM.render(
//     <App counter={counter} />,
//     document.getElementById('root')
// )

const refresh = () => {
    ReactDOM.render(<App counter={counter}/>,
    document.getElementById('root'))
}

refresh()
counter += 1
refresh()
counter += 1
refresh()
