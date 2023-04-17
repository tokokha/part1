import { useState } from 'react'
import { Button } from './button.js'
import { Statistics, Header } from './helpers.js'


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