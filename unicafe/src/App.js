import { useState } from 'react'


const setToValue = (action, newCounter) => () => {
  action(newCounter)
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={setToValue(props.action, props.counter + 1)}>{props.text}</button>
  )
}

const Stat = (props) => {
  return (
    <p>{props.text} {props.stat}</p>
  )
}


const App = () => {
  //save clicks os each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header header='give feedback' />
      <Button action={setGood} counter={good} text='good' />
      <Button action={setNeutral} counter={neutral} text='neutral' />
      <Button action={setBad} counter={bad} text='bad' />
      <Header header='statistics' />
      <Stat stat={good} text='good' />
      <Stat stat={neutral} text='neutral' />
      <Stat stat={bad} text='bad' />
      <Stat stat={good + neutral + bad} text='all' />
      <Stat stat={(good + (-bad)) / (good + neutral + bad)} text='average' />
      <Stat stat={good / (good + neutral + bad) + '%'} text='positive' />
    </div>
  )
}
  
  
export default App