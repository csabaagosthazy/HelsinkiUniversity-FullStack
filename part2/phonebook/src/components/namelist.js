import React from "react";

const NameList = props => {
  return (
    <div>
      {props.data.map(person => (
        <li key={person.name}>
          {person.name} {person.number}{" "}
          <button onClick={() => props.handleDelete(person)}>Delete</button>
        </li>
      ))}
    </div>
  );
};

export default NameList;
