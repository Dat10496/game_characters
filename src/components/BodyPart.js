import React from "react";

function BodyPart({ path, index, zIndex }) {
  return (
    <>
      <img
        src={`../character/${path}/${index + 1}.png`}
        alt=""
        width={260}
        style={{ zIndex, position: "absolute", top: 0, left: 0 }}
      />
    </>
  );
}

export default BodyPart;
