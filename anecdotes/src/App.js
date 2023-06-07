import { useState } from 'react'

const Header = (props) => {
  return <h1>{props.content}</h1>
}

const Button = (props) => {
  return (
    <button onClick={props.action}>
    {props.text}
    </button>
  )
}

const Maxvotes = (props) => {
  const max = Math.max(...props.vote);
  const index = props.vote.indexOf(max);
  return (
    <>
      <p>{props.anecdote[index]}</p>
      <p>has {props.vote[index]}votes</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent pf the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Prgoramming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleClick = () => {
    setSelected(Math.floor(Math.random() * 7));
    console.log(selected, votes[selected]);
  }

  const handleVotes = () => {
    const copy = [...votes]
    copy[selected] += 1;
    setVotes(copy);
  }
  
  return (
    <>
      <div>
        <Header content="Anecdote of the day" />
        {anecdotes[selected]}
        <p>has {votes[selected]} votes</p>
        <Button action={handleClick} text="next anecdote" />
        <Button action={handleVotes} text="vote" />
        <Header content="Anecdote with most votes" />
        <Maxvotes vote={votes} anecdote={anecdotes} />
      </div>
    </>
  )
}


export default App