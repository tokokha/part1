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

const Statistics = (props) => {
  if (props.good == 0 && props.neutral == 0 && props.bad == 0) {
    return (
      <p>No feedback given</p>
    )
  } else {
    return (
      <div>
        <Stat stat={props.good} text='good' />
          <Stat stat={props.neutral} text='neutral' />
          <Stat stat={props.bad} text='bad' />
          <Stat stat={props.good + props.neutral + props.bad} text='all' />
          <Stat stat={(props.good + (-props.bad)) / (props.good + props.neutral + props.bad)} text='average' />
          <Stat stat={props.good / (props.good + props.neutral + props.bad) + '%'} text='positive' />
      </div>
    )
  }
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}
  
  
export default App