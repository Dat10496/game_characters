import React from "react";

function BodyList({ total, path, size, setParts, parts, part }) {
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
              setParts({ ...parts, [part]: index });
            }}
          />
        </div>
      ))}
    </>
  );
}

export default BodyList;
