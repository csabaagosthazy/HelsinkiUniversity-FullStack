import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick, title }) => <button onClick={handleClick}>{title}</button>;

const Statistics = ({ good, neutral, bad }) => {
  let all = good + neutral + bad;
  if (all === 0) return <p>No feedback given</p>;
  let avg = ((good * 1 + neutral * 0 + bad * -1) / all).toFixed(2);
  let positive = `${((good / all) * 100).toFixed(2)} %`;
  return (
    <div>
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={all} />
          <Statistic text="average" value={avg} />
          <Statistic text="positive" value={positive} />
        </tbody>
      </table>
    </div>
  );
};

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodPress = () => {
    setGood(good + 1);
  };

  const handleNeutralPress = () => {
    setNeutral(neutral + 1);
  };

  const handleBadPress = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodPress} title={"good"} />
      <Button handleClick={handleNeutralPress} title={"neutral"} />
      <Button handleClick={handleBadPress} title={"bad"} />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
