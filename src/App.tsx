import { Header } from "./components/Header";

import { AddTask } from "./components/AddTask";
import { TaskTable } from "./components/TaskTable";
import { useState } from "react";

import styled from './App.module.css'

interface Props{
  typedTask: string;
  isCompleted: boolean;
  id: number;
}

export function App(){
  const [allTasksArray, setAllTasksArray] = useState<Props[]>([])

  function handleAddNewTask(newTask: Props){
    setAllTasksArray([...allTasksArray, newTask])
  }

  
  function handleDeleteTaskOfUser(task: string){
    const newTasks = allTasksArray.filter(allTasks => allTasks.typedTask !== task)
    
    setAllTasksArray([...newTasks])
  }

  function handleSetAllTasksArray(updatedArrayTasks: Props[]){
    setAllTasksArray(updatedArrayTasks)
  }

  return(
    <>
      <Header />

      <div className={styled.wapper}>
        <AddTask 
          handleAddNewTask={handleAddNewTask}
        />

        <TaskTable 
          handleSetAllTasksArray={handleSetAllTasksArray}
          allTasksArray={allTasksArray} 
          handleDeleteTaskOfUser={handleDeleteTaskOfUser} 
        />
      </div>
    </>
  )
}