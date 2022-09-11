import {PlusCircle} from 'phosphor-react'
import { FormEvent, useState } from 'react'

import styled from './AddTask.module.css'

interface AllTasksArrayProps{
  typedTask: string;
  isCompleted: boolean;
  id: number;
}

interface AddTaskProps{
  handleAddNewTask: (element: AllTasksArrayProps) => void;
}

export function AddTask({ handleAddNewTask}: AddTaskProps){

  const [typedTask, setTypedTask] = useState('')
  const [numberOfTasksCreated, setNumberOfTasksCreated] = useState(1)

  function createdNewIdSequent(){
    setNumberOfTasksCreated(stage => stage + 1)
  }

  function handlAddNewTaskInTable(event: FormEvent) {
    event.preventDefault() 

    createdNewIdSequent()

    handleAddNewTask({typedTask, isCompleted: false, id: numberOfTasksCreated})
   
    setTypedTask("")
  }

  return(
    <form onSubmit={handlAddNewTaskInTable} className={styled.form}>
      <input type="text" placeholder="Adicione uma nova tarefa" onChange={e => setTypedTask(e.target.value)} value={typedTask} required />
      <button type="submit">Criar <PlusCircle size={20}/> </button>
    </form>
  )
}