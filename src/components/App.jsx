import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [newItems, setNewItems] = useState([]);

  function handleChange(event) {
    setInput(event.target.value);
  }

  function btnClicked() {
    if (!input) {
      return;
    }

    const items = {
      id: Math.floor(Math.random() * 1000),
      value: input,
    };

    setNewItems((prevValue) => {
      return [...prevValue, items];
    });
    setInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          onChange={handleChange}
          placeholder="Type here"
          value={input}
        />
        <button onClick={btnClicked}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {newItems.map((item) => {
            return (
              <li key={item.id}>
                {item.value}

                <i
                  onClick={() => {
                    const newArray = newItems.filter(
                      (set) => set.id !== item.id
                    );
                    setNewItems(newArray);
                  }}
                  class="fa-regular fa-trash-can trashIcon"
                ></i>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
