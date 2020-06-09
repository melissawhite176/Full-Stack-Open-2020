import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  const { text } = props
  return (
    <h1>{text}</h1>
  )
}

const AnecdoteOfDay = (props) => {
  const { anecdotes, selected, vote } = props
  return (
    <div>
      {anecdotes[selected]}
      <p>has {vote[selected]} votes</p>
    </div>
  )
}

const Button = (props) => {
  const { handleClick, text } = props
  return (
    <button onClick={handleClick}>{text}</button>
  )
}


const AnecdoteMostVotes = (props) => {
  const {anecdotes, indexOfMostVotes, mostVotesNum} = props
  return(
    <div>
      {anecdotes[indexOfMostVotes]}
      <p>
       has {mostVotesNum} votes
      </p>
    </div>
  )
}


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))

  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }


  const voteForAnecdote = () => {
    const copy = [...vote]
    copy[selected] += 1
    setVote(copy)
  }


  let mostVotesNum = Math.max(...vote)
  const indexOfMostVotes = vote.findIndex((num) => num === mostVotesNum)


  return (
    <div>
      <Header text='Anecdote of the Day' />
      <AnecdoteOfDay anecdotes={anecdotes} vote={vote} selected={selected} />
      <Button handleClick={voteForAnecdote} text='vote' />
      <Button handleClick={randomAnecdote} text='next anecdote' />
      <Header text='Anecdote with most votes' />
      <AnecdoteMostVotes anecdotes={anecdotes} indexOfMostVotes={indexOfMostVotes} mostVotesNum={mostVotesNum}/>
    </div >
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

