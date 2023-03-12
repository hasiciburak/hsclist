import "./App.scss"
import { useState, useEffect } from "react"
import Header from "./components/sections/Header"
import TodoContainer from "./components/sections/TodoContanier"
import TodoCard from "./components/TodoCard"
import todoJSON from "./data/data.json"

function App() {
  const [todoData, setTodoData] = useState([])
  useEffect(() => {
    setTodoData(todoJSON)
  }, [])
  return (
    <div className="App">
      <Header />
      <TodoContainer>
        {todoJSON.map((todoItem) => {
          return (
            <TodoCard
              done={todoItem.done}
              setTodoData={setTodoData}
              key={todoItem.id}
            >
              {todoItem.description}
            </TodoCard>
          )
        })}
      </TodoContainer>
    </div>
  )
}

export default App
