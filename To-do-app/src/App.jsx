import ToDoCard from "./components/ToDoCard"
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"

function App() {
  let todos = [
        'Do this',
        'Do that',
        'Do anything'
    ]
  return (
    <main>
      <ToDoInput></ToDoInput>
      <ToDoList todos = {todos} ></ToDoList>
      <ToDoCard></ToDoCard>
    </main>
  )
}

export default App
