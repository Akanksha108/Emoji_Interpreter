import React, { useState } from "react";
import emojiImage from "./emojis.jpg";
import "./styles.css";

// Database
const emojiDictionary = {
  "😊": "Smiling",
  "😔": "Sad",
  "😉": "Winking",
  "💖": "Heart",
  "😠": "Angry",
  "😫": "Tired",
  "😴": "Sleepy",
  "🥵": "Hot Face",
  "🥶": "Cold Face",
  "😨": "Fearful",
  "🥱": "Yawning"
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
    //console.log(meaning);

    if (meaning) {
      setMeaning(meaning);
    } else {
      setMeaning("Error: Emoji Not Found");
    }
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
        style={{
          width: "70%",
          padding: "0.6rem",
          height: "4vh",
          border: "2px solid black"
        }}
        onChange={emojiInputHandler}
      />
      <h2> Emoji's we know </h2>
      <h2> {meaning} </h2>
      <h2>
        {emojisWeKnow.map((emoji) => {
          return (
            <span
              key={emoji}
              style={{
                fontSize: "3rem",
                padding: "0.5rem",
                margin: "10px",
                cursor: "pointer"
              }}
              onClick={() => emojiClickHandler(emoji)}
            >
              {emoji}{" "}
            </span>
          );
        })}
      </h2>

      <img
        src={emojiImage}
        alt="Emoji"
        style={{ width: "600px", height: "350px" }}
      />
    </div>
  );
}
