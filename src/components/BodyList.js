import React from "react";

function BodyList({ total, path, size, setParts, parts, part }) {
  // path = "character/"
  //type = "body"
  //total = "17"
  const bodyArray = [];
  for (let i = 1; i <= total; i++) {
    bodyArray.push(`../character/${path}/${i}.png`);
  }
  return (
    <>
      {bodyArray.map((item, index) => (
        <div
        key={index}
          className={`clickable-square ${
            parts[part] === index ? "selected" : ""
          }`}
        >
          <img
            src={item}
            alt=""
            height={size}
            className="img"
            onClick={() => {
              // console.log(parts)
              setParts({ ...parts, [part]: index });
            }}
          />
        </div>
      ))}
    </>
  );
}

export default BodyList;

/*
const name = 'age'
const obj = {name: "abc"}
obj.name | "abc"
obj['name'] | "abc"
obj[name] === obj['age'] === obj.age



*/
