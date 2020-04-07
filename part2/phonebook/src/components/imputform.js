import React from "react";

const InputForm = ({ addPerson, handleNameChange, handleNumberChange, newName, newNumber }) => {
  return (
    <form onSubmit={addPerson}>
      <label>
        Name:
        <input onChange={handleNameChange} value={newName} />
      </label>
      <br></br>
      <label>
        Number:
        <input onChange={handleNumberChange} value={newNumber} />
      </label>
      <br></br>
      <button type="submit">add</button>
    </form>
  );
};

export default InputForm;
