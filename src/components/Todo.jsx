import React from 'react'
import { useState } from 'react'
import { Map } from './Map'
// import styles from './styles.module.css'
export const Todo = () => {
    
    
    const [todo, setTodo] = useState([])
    
    
    const [init, setInit] = useState("")
    
    
    const [ids,setIds]=useState(0)
    
    
    const handleChange = (e) => {
        setInit(e.target.value);
    }


    const onDelete = (id) => {
        let newTodo = todo.filter((el) => el.id !== id);
        setTodo(newTodo);
    }
    
    
    const handleTodo = () => {
        
        setTodo([
            ...todo,{id:ids,value:init,isCompleted:false}
        ])
        setIds(ids+1);
        setInit("")
    }

    
  return (
    <div>
        <h1>Todo</h1>
        <input value={init} type="text" placeholder='Enter Todo' onChange={handleChange}/>
        <button onClick={handleTodo}>Add</button>
        {todo.map((el)=> {
            return (
                <Map el={el} key={el.id}/>   
            )
        })}
    </div>
  )
}
