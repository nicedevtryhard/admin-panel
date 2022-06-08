import "./Input.scss";
import React from "react";
export default function Input(props) {
  const handleChange = (e) => {
    props.setValue(e.target.value);
  };
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={handleChange}
    />
  );
}
