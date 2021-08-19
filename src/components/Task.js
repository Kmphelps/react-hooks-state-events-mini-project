import React from "react";

function Task({text, category, deleteHandler}) {
  
  function clickHandler() {
      deleteHandler(text);
  };
  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={clickHandler} className="delete">X</button>
    </div>
  );
}

export default Task;
