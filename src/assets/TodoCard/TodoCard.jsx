import React from 'react'

const TodoCard = ({todoId, checkTodoFunction, todo, deletTodoFunction}) => {
  return (
    <div className='ul'>
        <div style={{display: 'flex', gap: '20px', justifyContent: 'space-between', alignItems: 'center'}} key={todoId}>
              <input
                  className='checkbox'
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => checkTodoFunction(todoId)} />
              <li
                  className='task'
                  style={{ listStyle: 'none', textDecoration: todo.completed ? 'line-through' : 'none', color: todo.completed ? 'grey' : 'black', width: '310px' }}>{todo.text}
              </li>
              <button
                  className='btn'
                  onClick={() => deletTodoFunction(todo.text)}
                  style={{cursor: 'pointer'}}
              >
                  X
              </button>
        </div>
    </div>
  )
}

export default TodoCard
