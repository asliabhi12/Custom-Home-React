import { useFormik } from "formik";
import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = () => {

  const handleDeleteTask = (taskId) => {
    setTodoList((prevToDoList) => prevToDoList.filter((task) => task.id !== taskId));
  }

  const formik = useFormik({
    initialValues: {
      task: "",
    },


    onSubmit: (values) => {
      if (values.task.trim() !== "") {
        setTodoList((prevList) => [
          ...prevList,
          { task: values.task.trim(), completed: false, id: Date.now() },
        ]);
        formik.resetForm();
      }
    },
  });
  const [toDoList, setTodoList] = useState([]);
  const handleCheckboxChange = (id) => {
    setTodoList((prevList) =>
      prevList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  return (
    <form className="ele-container" id="ele-1" onSubmit={formik.handleSubmit}>
      <nav id="todo-nav">
        <h2>To Do Task</h2>
        <button id="three-dot">...</button>
      </nav>
      <div className="add-todo">
        <input
          type="text"
          id="input-box"
          placeholder="type something"
          name="task"
          onChange={formik.handleChange}
          value={formik.values.task}
        />
        <button id="add-todo-btn" type="submit" className="btn-1">
          +
        </button>
      </div>
      <div className="to-do-container">
        {toDoList.map((task) => (
          <div key={task.id} class="single-todo-container">
            <input
              type="checkbox"
              id={`checkbox-${task.id}`}
              onChange={() => handleCheckboxChange(task.id)}
              checked={task.completed}
            />
            <label
              style={{width:"200px"}}
              className={task.completed ? "checked" : ""}
              htmlFor={`checkbox-${task.id}`}
            >
              {task.task}
            </label>
    
            <DeleteIcon onClick={()=>handleDeleteTask(task.id)}/>
           
          </div>
        ))}
      </div>
    </form>
  );
};

export default Todo;
