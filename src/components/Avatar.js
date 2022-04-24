import React from "react";
import BodyPart from "./BodyPart";

function Avatar({ parts }) {
  return (
    <>
      <BodyPart path="body" index={parts.body} zIndex={0} />
      <BodyPart path="eyes" index={parts.eyes} zIndex={1} />
      <BodyPart path="hair" index={parts.hair} zIndex={6} />
      <BodyPart path="mouths" index={parts.mouth} zIndex={4} />
      <BodyPart path="eyebrows" index={parts.eyebrows} zIndex={4} />
      <BodyPart path="accessories/glasses" index={parts.glasses} zIndex={5} />
      <BodyPart path="facial_hair" index={parts.facial_hair} zIndex={4} />
      <BodyPart path="clothes/layer_1" index={parts.clothing1} zIndex={2} />
      <BodyPart path="clothes/layer_2" index={parts.clothing2} zIndex={3} />
      <BodyPart path="clothes/layer_3" index={parts.clothing3} zIndex={4} />
    </>
  );
}

export default Avatar;
