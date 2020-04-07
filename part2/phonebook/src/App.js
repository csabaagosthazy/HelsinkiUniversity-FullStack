import React, { useState, useEffect } from "react";

import NameList from "./components/namelist";
import SearchField from "./components/searchfield";
import Header from "./components/header";
import InputForm from "./components/imputform";
import peopleService from "./services/people";
import Notification from "./components/notification";

const App = () => {
  const [people, setPeople] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  useEffect(() => {
    const filteredData = people.filter(item =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    setSearchResult(filteredData);
  }, [searchInput, people]);

  useEffect(() => {
    console.log("effect");
    peopleService.getAllItems().then(initPeople => {
      console.log("promise fulfilled");
      setPeople(initPeople);
    });
  }, []);

  const notificationMessage = (type, message) => {
    setMessage(message);
    setMessageType(type);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const addPerson = event => {
    event.preventDefault();
    if (newName.length === 0) {
      notificationMessage("error", "Name cannot be empty");
      return;
    }

    if (newNumber.length === 0) {
      notificationMessage("error", "Number cannot be empty");
      return;
    }
    const newPerson = {
      name: newName,
      number: newNumber
    };

    const foundPerson = people.find(person => person.name === newName);

    if (!foundPerson) {
      peopleService
        .createItem(newPerson)
        .then(createdPerson => setPeople(people.concat(createdPerson)));
    } else {
      if (foundPerson.number === newPerson.number) {
        notificationMessage(
          "info",
          `${newName} is already added to phonebook with the same number`
        );
      } else {
        if (
          window.confirm(
            `${newName} is already added to phonebook, do you want to replace old number with new one?`
          )
        ) {
          peopleService
            .updateItem(foundPerson.id, newPerson)
            .then(changedPerson => {
              setPeople(
                people.map(person => (person.id !== foundPerson.id ? person : changedPerson))
              );
              notificationMessage("info", `${foundPerson.name} updated`);
            })
            .catch(notificationMessage("error", `Unable to modify ${foundPerson.name}`));
        }
      }
    }
    setNewName("");
    setNewNumber("");
  };
  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const handleSearch = event => {
    const { value } = event.target;
    setSearchInput(value);
  };

  const handleDelete = personToDelete => {
    if (window.confirm(`Do you want to delete ${personToDelete.name}?`)) {
      peopleService
        .deleteItem(personToDelete.id)
        .then(deletedPerson => {
          console.log(deletedPerson);
          setPeople(people.filter(person => person.id !== personToDelete.id));
          notificationMessage("info", `${personToDelete.name} has been deleted`);
        })
        .catch(error =>
          notificationMessage("error", `Name: ${personToDelete.name} doesn't exist in the database`)
        );
    }
  };

  return (
    <div>
      <Notification type={messageType} message={message} />
      <Header title={"Phonebook"} />
      <SearchField handleSearch={handleSearch} searchInput={searchInput} />
      <Header title={"Add new"} />
      <InputForm
        addPerson={addPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
      />
      <Header title={"Numbers"} />
      <NameList data={searchResult} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
