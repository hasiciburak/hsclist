import React from "react";

const AddInput = () => {
  return (
    <div className="addinput-wrapper">
      <input
        type="text"
        placeholder="Add a new todo"
        className="addinput-input"
      />
      <button className="addinput-button">Add Todo</button>
    </div>
  );
};

export default AddInput;