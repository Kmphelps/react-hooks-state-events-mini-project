import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteHandler }) {


  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task 
        key={task.text}
        text={task.text}
        category={task.category}
        deleteHandler={deleteHandler}
        />
      ))}
    </div>
  );
}

export default TaskList;
