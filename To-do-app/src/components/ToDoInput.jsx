import React, { useState } from 'react'

export default function ToDoInput(props) {
  const {handleAddTodos,setTodoValue,todoValue} = props

  return (
    <header>
        <input value = {todoValue} onChange={(e)=>{
          setTodoValue(e.target.value)
        }} placeholder='Enter text' onKeyDown={(e)=>{
          if (e.key=='Enter'){
            handleAddTodos(todoValue)
          setTodoValue('')
          }
        }}/>
        <button onClick={()=>{
          handleAddTodos(todoValue)
          setTodoValue('')
        }} className='addbtn'>Add</button>
    </header>
    
  )
}
