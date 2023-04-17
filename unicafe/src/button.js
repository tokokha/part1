const setToValue = (action, newCounter) => () => {
    action(newCounter)
  }


export const Button = (props) => {
    return (
      <button onClick={setToValue(props.action, props.counter + 1)}>{props.text}</button>
    )
  }