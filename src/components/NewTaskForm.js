import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");


  const selectableCategories = categories.filter((category) => (  // excludes 'All' from the create new task dropdown
    category !== "All"
  ));

  const optionElements = selectableCategories.map((category) => (  // adds a category dropdown option for each cateory
    <option>{category}</option>
  ));


  function handleText(e) { // updates the text value to match the input value (see below)
    setText(e.target.value)
  }


  function handleCategory(e) { // updates the category value to match the category selection (see below)
    setCategory(e.target.value)
  }


  function handleSubmit(e) {  // creates a new object for the task
    e.preventDefault();
    onTaskFormSubmit({text, category});
  }




  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleText} />
      </label>


      <label>
        Category
        <select name="category" value={category} onChange={handleCategory}>
          {optionElements}
        </select>
      </label>


      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
