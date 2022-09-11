import { Trash } from "phosphor-react";
import { ChangeEvent, useState } from "react";

import styled from './Task.module.css'

interface AllTasksArrayProps{
  typedTask: string;
  isCompleted: boolean;
  id: number;
}

interface TaskProps{
  handleDeleteTaskOfUser: (element: string) => void;
  tasks: AllTasksArrayProps[];
  task: AllTasksArrayProps;
  handleSetAllTasksArray: (element: AllTasksArrayProps[]) => void;
}

export function Task({tasks, task, handleSetAllTasksArray, handleDeleteTaskOfUser}:TaskProps){
  const [statusCommentCompleted, setStatusCommentCompleted] = useState(false)
  
  function handleComplitedTask(element: ChangeEvent<HTMLInputElement>){
    const newStatusTask = {...task, isCompleted: element.target.checked}
    const newArrayOfTasks = tasks.map(elementTask => elementTask.id === newStatusTask.id? newStatusTask : elementTask)


    handleSetAllTasksArray(newArrayOfTasks)

    setStatusCommentCompleted(element.target.checked)   
  }

  function handleDeleteTask(){
    handleDeleteTaskOfUser(task.typedTask)
  }
  
  return(
    <section className={styled.section}>

      <label className={styled.label}>
        <input type="checkbox" onChange={handleComplitedTask}/>
        <span className={styled.circle}></span>
      </label>

      <p className={statusCommentCompleted ? styled.desableP : styled.styleP}>{task.typedTask} </p>
      <Trash className={styled.trash} size={24} onClick={handleDeleteTask} />
    </section>
  )
}