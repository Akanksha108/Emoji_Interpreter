import React, { useState } from "react";
import "./styles.css";

// Database
const emojiDictionary = {
  "😊": "Smiling",
  "😔": "Sad",
  "😉": "Winking",
  "💖": "Heart",
  "😠": "Angry",
  "😫": "Tired"
};

// console.log(Object.keys(emojiDictionary));

let emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  // To Handle input from user
  function emojiInputHandler(event) {
    // console.log(event.target.value);
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    // console.log(meaning);
    setMeaning(meaning);
  }

  let emojiClickHandler = (emoji) => {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  };

  return (
    <div className="App">
      <h1>Inside Outt!!!</h1>
      <input
        type="text"
        style={{ width: "80%", padding: "0.6rem" }}
        onChange={emojiInputHandler}
      />
      <h2> Emoji's we know </h2>
      <h2> {meaning} </h2>
      <h2>
        {emojisWeKnow.map((emoji) => {
          return (
            <span
              key={emoji}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
              onClick={() => emojiClickHandler(emoji)}
            >
              {emoji}{" "}
            </span>
          );
        })}
      </h2>
    </div>
  );
}
