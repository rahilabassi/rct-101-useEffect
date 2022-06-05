import React from 'react'
import styles from './styles.module.css'
import { useState } from 'react'
export const Map =({ el , onDelete }) => {


  const [done, setDone] = useState(el.isCompleted)
  
  
  const handleChange = (e) => {
    console.log(e.target.checked)
    setDone(e.target.checked)
  }
  
  
  return (
    <div className={styles.single} key={el.id}>
      <input type="checkbox" checked={done} onChange={handleChange}/>
      {(done) ? <div className={styles.done}>{el.value}</div> : <div>{el.value}</div>}
      <button onClick = {() => onDelete(el.id)} >x</button>
    </div>
  )
}
