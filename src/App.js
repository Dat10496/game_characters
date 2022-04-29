import React from "react";
import BodyList from "./components/BodyList";
import "./App.css";
import { useState } from "react";
import Avatar from "./components/Avatar";
const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouth: 24,
  eyebrows: 15,
  hat: 28,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
  facial_hair: 17,
};

function App() {
  const [parts, setParts] = useState({
    body: 0,
    eyes: 0,
    hair: 0,
    mouth: 0,
    eyebrows: 0,
    hat: 0,
    glasses: 0,
    clothing1: 0,
    clothing2: 0,
    clothing3: 0,
    facial_hair: 0,
  });

  const randomButton = () => {
    setParts({
      body: Math.floor(Math.random() * total.body),
      eyes: Math.floor(Math.random() * total.eyes),
      hair: Math.floor(Math.random() * total.hair),
      mouth: Math.floor(Math.random() * total.mouth),
      eyebrows: Math.floor(Math.random() * total.eyebrows),
      hat: Math.floor(Math.random() * total.hat),
      glasses: Math.floor(Math.random() * total.glasses),
      clothing1: Math.floor(Math.random() * total.clothing1),
      clothing2: Math.floor(Math.random() * total.clothing2),
      clothing3: Math.floor(Math.random() * total.clothing3),
      facial_hair: Math.floor(Math.random() * total.facial_hair),
    });
  };

  console.log("render");

  return (
    <>
      <div className="title">CHARACTER</div>
      <div className="subtitle">🎺CUSTOMIZATION🎺</div>
      <div className="divider"></div>
      <div className="ava-group">
        <div>
          <div className="ava-wrapped">
            <div className="avatar">
              <Avatar parts={parts} />
            </div>
            <div className="text">
              <button className="button" onClick={() => randomButton()}>
                Randomize!
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="list-section">
            <h2>Body</h2>
            <div className="list">
              <BodyList
                total={total.body}
                path="body"
                part="body"
                size="60"
                setParts={setParts}
                parts={parts}
              />
            </div>
          </div>
          <div className="list-section">
            <h2>Eyes</h2>
            <div className="list">
              <BodyList
                total={total.eyes}
                path="eyes"
                part="eyes"
                size="150"
                setParts={setParts}
                parts={parts}
              />
            </div>
          </div>
          <div className="list-section">
            <h2>Hair</h2>
            <div className="list">
              <BodyList
                total={total.hair}
                path="hair"
                size="60"
                part="hair"
                setParts={setParts}
                parts={parts}
              />
            </div>
          </div>
          <div className="list-section">
            <h2>Mouth</h2>
            <div className="list">
              <BodyList
                total={total.mouth}
                path="mouths"
                size="80"
                part="mouth"
                setParts={setParts}
                parts={parts}
              />
            </div>
          </div>
          <div className="list-section">
            <h2>EyeBrows</h2>
            <div className="list">
              <BodyList
                total={total.eyebrows}
                path="eyebrows"
                size="60"
                part="eyebrows"
                setParts={setParts}
                parts={parts}
              />
            </div>
          </div>
          <div className="list-section">
            <h2>Glasses</h2>
            <div className="list">
              <BodyList
                total={total.glasses}
                path="accessories/glasses"
                part="glasses"
                size="60"
                setParts={setParts}
                parts={parts}
              />
            </div>
          </div>
          <div className="list-section">
            <h2>Facial Hair</h2>
            <div className="list">
              <BodyList
                total="17"
                path="facial_hair"
                size="120"
                part="facial_hair"
                setParts={setParts}
                parts={parts}
              />
            </div>
          </div>
          <div className="list-section">
            <h2>Clothing1</h2>
            <div className="list">
              <BodyList
                total={total.clothing1}
                path="clothes/layer_1"
                size="60"
                part="clothing1"
                setParts={setParts}
                parts={parts}
              />
            </div>
          </div>
          <div className="list-section">
            <h2>Clothing2</h2>
            <div className="list">
              <BodyList
                total={total.clothing2}
                path="clothes/layer_2"
                parts={parts}
                setParts={setParts}
                part="clothing2"
                size="60"
              />
            </div>
          </div>
          <div className="list-section">
            <h2>Clothing3</h2>
            <div className="list">
              <BodyList
                total={total.clothing3}
                path="clothes/layer_3"
                parts={parts}
                setParts={setParts}
                part="clothing3"
                size="60"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

// array methods (filter + map + forEach)
// for loop
// spread operator (...)
// array + object
