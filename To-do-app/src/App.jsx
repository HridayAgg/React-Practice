import { useState,useEffect } from "react"
import ToDoCard from "./components/ToDoCard"
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"

function App() {
  const [todos,setTodos]=useState([
        
  ])
  const [todoValue,setTodoValue] = useState('')
 
function persistData(newList) {
  localStorage.setItem('todos',JSON.stringify({todos:newList}))
  
}
function handleAddTodos(newTodo){
  const Newtodolist=[...todos,newTodo]
  persistData(Newtodolist)
  setTodos(Newtodolist)
}
function handleEditTodos(index){
  const valueToBeEdited = todos[index]
  setTodoValue(valueToBeEdited)
  handleDeleteTodos(index)

}
function handleDeleteTodos(index){
  const newTodoList = todos.filter((todo,todoIndex)=>{
    return todoIndex!==index
  })
  setTodos(newTodoList)
}

useEffect(()=>{
  if (!localStorage) {
    return
  }
  let localTodos = localStorage.getItem('todos')
  if (!localTodos) {
    return 
  }
  localTodos=JSON.parse(localTodos).todos
  setTodos(localTodos)
},[])
  return (
    <main>
      <ToDoInput todoValue={todoValue} setTodoValue = {setTodoValue} handleAddTodos={handleAddTodos}></ToDoInput>
      <ToDoList handleEditTodos = {handleEditTodos} handleDeleteTodos={handleDeleteTodos} todos = {todos} ></ToDoList>
    </main>
  )
}

export default App
