import React from "react";

function Spec({ spec, index, toggleSpec }) {
  return (
    <div
      className={"spec " + (spec.open ? "open" : "")}
      key={index}
      onClick={() => toggleSpec(index)}
    >
      <div className="spec-about">{spec.about}</div>
      <div className="spec-specifications">{spec.specifications}</div>
    </div>
  );
}

export default Spec;
