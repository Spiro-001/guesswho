import { useEffect, useState } from "react";
import "./Gameboard.css";

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const PEOPLE = [
  "A1",
  "A2",
  "A3",
  "A4",
  "A5",
  "A6",
  "A7",
  "A8",
  "B1",
  "B2",
  "B3",
  "B4",
  "B5",
  "B6",
  "B7",
  "B8",
  "C1",
  "C2",
  "C3",
  "C4",
  "C5",
  "C6",
  "C7",
  "C8",
];

function GameBoard() {
  const [people, setPeople] = useState([]);
  let limit = 0;

  useEffect(() => {
    openai
      .createImage({
        prompt: "a human",
        n: 1,
        size: "1024x1024",
      })
      .then((res) => {
        setPeople(res.data.data);
        console.log(people);
      });
  }, []);

  return (
    <div className="gameboard">
      <h1>Guess Who?</h1>
      <div className="board">
        {people.map((person, idx) => {
          return (
            <span id="person" key={idx}>
              <img src={person.url} className="people-image" alt="" />
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default GameBoard;
