import "./App.scss"
import Header from "./components/sections/Header"
import TodoContainer from "./components/sections/TodoContanier"
import TodoCard from "./components/TodoCard"

function App() {
  return (
    <div className="App">
      <Header />
      <TodoContainer>
        <TodoCard>Deneme</TodoCard>
        <TodoCard>Deneme</TodoCard>
        <TodoCard>Deneme</TodoCard>
      </TodoContainer>
    </div>
  )
}

export default App
