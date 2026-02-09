import React from 'react'

export default function ToDoCard(td) {
    const {children} = td 

  return (
      <li className='todoItem'>
        {children}
        <div className="actionscontainer">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-trash"></i>
        </div>
    </li>

  )
}
