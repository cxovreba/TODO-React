import { useEffect, useState } from 'react'
import Input from './assets/Input/Input';
import Button from './assets/Button/Button';
import TodoCard from './assets/TodoCard/TodoCard';
import Mode from './assets/Mode-btn/ModeBtn';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    { id: 1, text: "task_1", completed: false },
    { id: 2, text: "task_2", completed: false }
  ]);

  useEffect(() => {
    const saveTask = JSON.parse(localStorage.getItem("todo"));
    if (saveTask) {
      setOutput(saveTask);
    }
  }, []);

  useEffect(() => {
    saveTask();
  } ,[output]);

  function addTask() {
    if (input === '') {
      alert('Please enter a task!')
    } else {
      setOutput(prev => [...prev, { id: prev.length + 1, text: input, completed: false }]);
    }
    saveTask();
  }

  function saveTask() {
    localStorage.setItem("todo", JSON.stringify(output));
  }

  function handleClick() {
    setInput('');
  }

  function toggleMode() {
    document.body.classList.toggle("dark-mode-styles");
    const isDarkMode = document.body.classList.contains('dark-mode-styles');
    window.localStorage.setItem('dark-mode', isDarkMode)
  }

  function deletTodo(todo_text) {
    setOutput(prev => prev.filter((item) => item.text !== todo_text));
  }

  function checkTodo(todo_id) {
    setOutput(prev => prev.map(item => {
      return item.id === todo_id ? { ...item, completed: !item.completed } : item;
    }))
  }

  return (
    <>
      <div className={`${
        document.body.classList.contains("dark-mode-styles")
          ? "dark-mode-styles"
          : ""
        }`}>
        <div className='main-container'>
          <div className="container">
            <div className='header'>
              <h1 className="title">TODO</h1>
              <Mode onClick={toggleMode}/>
            </div>
            <div className="input-section">
              <div className='circle'></div>
              <Input
                type='text'
                onChanged={(e) => { setInput(e.target.value) }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setInput(e.target.value);
                    addTask();
                    handleClick();
                }}}
                placeholder='Enter your task...'
                width={330}
                height={30}
                rounded={5}
                border='none'
                outline='none'
                value={input}
              />
              <Button
                onClick={addTask}
                width={20}
                height={30}
                backgroundColor={'white'}
                textColor={'black'}
                rounded={5}
                border={0}
              >
                +
              </Button>
            </div>
            <div className='result'>
              {output.map((todo) => {
                return (
                  <TodoCard
                    todoId={todo.id}
                    checkTodoFunction={checkTodo}
                    deletTodoFunction={deletTodo}
                    todo={todo}
                  />
                )
              })}
              <div className="input-info">
                <div className="item-left">{output.filter((output) => !output.completed).length} items left</div>
                <div className="desktop-option">
                  <div className="mark-all">All</div>
                  <div className="mark">Active</div>
                  <div className="mark">Completed</div>
                </div>
                <button className="delete-text">Clear Completed</button>
              </div>
            </div>
            <div className="option">
                <div className="mark-all">All</div>
                <div className="mark">Active</div>
                <div className="mark">Completed</div>
              </div>
              <div className="mark">
                <p>Drag and drop to reorder list</p>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
