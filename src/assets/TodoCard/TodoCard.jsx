import React from "react";

const TodoCard = ({ todoId, checkTodoFunction, todo, deletTodoFunction, isDarkMode }) => {
  const lightModeStyles = {
    listStyle: "none",
    textDecoration: todo.completed ? "line-through" : "none",
    color: todo.completed ? "#D1D2DA" : "#494C6B",
    width: "310px",
  };
  
  const darkModeStyles = {
    ...lightModeStyles,
    color: todo.completed ? "#4D5067" : "#FFFFFF",
  };
  
  const styles = isDarkMode ? darkModeStyles : lightModeStyles;

  return (
    <div className="ul">
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        key={todoId}
      >
        <input
          className="checkbox"
          type="checkbox"
          checked={todo.completed}
          onChange={() => checkTodoFunction(todoId)}
        />
        <li
          className="task"
          style={styles}
        >
          {todo.text}
        </li>
        <button
          className="btn"
          onClick={() => deletTodoFunction(todo.text)}
          style={{ cursor: "pointer" }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
