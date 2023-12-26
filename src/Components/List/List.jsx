import React, { useState, useEffect } from "react";
import TodoItem from "../Todo/TodoItem";
import "./List.css";

const List = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [emptyMessage, setemptyMessage] = useState("");
  const [limitReach, setlimitReach] = useState("");

  useEffect(() => {
    // Load items from local storage when the component mounts
    const storedItems = JSON.parse(localStorage.getItem("todoItems")) || [];
    setItems(storedItems);
  }, []);

  const setValue = (event) => {
    setInput(event.target.value);
    setemptyMessage("");
  };

  const listOfItems = () => {
    setItems((prevValue) => {
      const updatedItems = [...prevValue, input];
      // Save the updated items array to local storage
      localStorage.setItem("todoItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
    setInput("");
  };

  const deleteItems = (id) => {
    setItems((oldValue) => {
      const updatedItems = oldValue.filter((arrElement, index) => index !== id);
      // Save the updated items array to local storage
      localStorage.setItem("todoItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
    setlimitReach("");
  };

  const indicateEmpty = () => {
    setemptyMessage("Enter text to add !");
  };

  const indicateLimit = () => {
    setlimitReach("Delete items to add more !");
  }

  return (
    <>
      <div className="MainContainer">
        <div className="ListContainer">
          <h1 id="ToDo_heading">ToDo List</h1>
          <hr />
          <input
            id="form_element"
            onChange={setValue}
            type="text"
            className="itemInput"
            placeholder="Add Items"
            value={input}
          />
          <button
            className="addbutton"
            onClick={() => {
              if (input.length === 0 && items.length <= 6) {
                indicateEmpty();
              } else if (items.length > 6) {
                indicateLimit();
              } else {
                listOfItems();
              }
            }}
          >
            +
          </button>
          <h2 id="errorMessage" style={{ textAlign: "center", color: "grey" }}>
            {emptyMessage}
          </h2>
          <ul style={{ listStyleType: "none" }}>
            {items.map((itemVal, index) => {
              return (
                <TodoItem
                  text={itemVal}
                  key={index}
                  id={index}
                  onSelect={deleteItems}
                />
              );
            })}
          </ul>
          <h2 id="errorMessage1" style={{ textAlign: "center", color: "grey",marginBottom:'20px' }}>
            {limitReach}
          </h2>
        </div>
      </div>
    </>
  );
};

export default List;
