import React,{useState} from 'react'
import "./task.css"

const Task = () => {

    const [choice,setChoice]=useState();
  return (
    <div>
       <input type="text" placeholder='Enter Your Choice...!' value={choice}
       onChange={(e)=>setChoice(Number(e.target.value))}/>  
      
         <div className='mainDiv'>
            <div className={`Square ${choice === 1 && "round"}`}></div>
            <div className={`Square ${choice === 2 && "round"}`}></div>
            <div className={`Square ${choice === 3 && "round"}`}></div>
            <div className={`Square ${choice === 4 && "round"}`}></div>
            <div className={`Square ${choice === 5 && "round"}`}></div>
            <div className={`Square ${choice === 6 && "round"}`}></div>
            <div className={`Square ${choice === 7 && "round"}`}></div>
         </div>  
    </div>
  )
}

export default Task