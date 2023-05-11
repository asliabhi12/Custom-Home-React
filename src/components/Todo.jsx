import React from 'react'

const Todo = () => {
  return (
    <div class="ele-container" id="ele-1">
        <nav id="todo-nav">
          <h2>To Do Task</h2>
          <button id="three-dot">...</button>
        </nav>
        <div class="to-do-container"></div>
        <div class="add-todo">
          <input type="text" id="input-box" placeholder="type something" />
          <button id="add-todo-btn" onclick="addTask()" class="btn-1">+</button>
        </div>
      </div>
  )
}

export default Todo