import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });
  const [maxVoteIndex, setMaxVoteIndex] = useState(0);

  const randomize = () => {
    let random = Math.floor(Math.random() * Math.floor(anecdotes.length));
    setSelected(random);
  };

  const handleVote = () => {
    const obj = { ...votes };
    obj[selected] += 1;
    setVotes(obj);

    const values = Object.values(obj);
    const maxValue = Math.max.apply(Math, values);
    console.log(maxValue);
    const maxVoteItem = values.findIndex(value => value === maxValue);
    console.log(maxVoteItem);
    setMaxVoteIndex(maxVoteItem);
  };
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={() => handleVote()}>Vote</button>
      <button onClick={() => randomize()}>Next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[maxVoteIndex]}</p>
      <p>has {votes[maxVoteIndex]} votes</p>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
