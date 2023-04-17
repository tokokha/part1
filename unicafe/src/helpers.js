const StatisticLine = (props) => {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr> 
    )
  }
  
export const Statistics = (props) => {
    if (props.good == 0 && props.neutral == 0 && props.bad == 0) {
      return (
        <p>No feedback given</p>
      )
    } else {
      return (
        <table>
            <tbody>
            <StatisticLine text='good' value={props.good} />
            <StatisticLine text='neutral' value={props.neutral} />
            <StatisticLine text='bad' value={props.bad} />
            <StatisticLine text='all' value={props.good + props.neutral + props.bad} />
            <StatisticLine text='average' value={(props.good + (-props.bad)) / (props.good + props.neutral + props.bad)} />
            <StatisticLine text='positive' value={(props.good / (props.good + props.neutral + props.bad)) * 100 + '%'} />
            </tbody>
        </table>
      )
    }
  }


export const Header = (props) => {
  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}
  