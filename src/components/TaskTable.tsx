import { useEffect, useState } from "react";


import ImgClipboardText from "../assets/Clipboard.svg";
import { Task } from "./Task";
import styled from "./TaskTable.module.css"

interface AllTasksArrayProps{
  typedTask: string;
  isCompleted: boolean;
  id: number;
}

interface TaskTableProps{
  allTasksArray: AllTasksArrayProps[];
  handleDeleteTaskOfUser: (element: string) => void;
  handleSetAllTasksArray: (element: AllTasksArrayProps[]) => void;
}

export function TaskTable({ allTasksArray, handleSetAllTasksArray, handleDeleteTaskOfUser}: TaskTableProps){
  const [numberOfTasksComplited, setNumberOfTasksComplited] = useState(0)

  function handleSetNumberOfTasksComplited(){
    const numberTasksCompleted = allTasksArray.filter(task => task.isCompleted)

    setNumberOfTasksComplited(numberTasksCompleted.length)
  }

  useEffect(() => {
    handleSetNumberOfTasksComplited()
  }, [allTasksArray])

  const numberOfTasks = allTasksArray.length
  
  return(
    <>
      <main className={styled.main}>
        <div className={styled.scoreboard}>
        <div className={styled.numberOfTasks}>
          <p>Tarefas criadas<span>{numberOfTasks}</span></p>    
        </div>

        <div className={styled.toDo}>
          <p >Concluídas<span>{numberOfTasks ? `${numberOfTasksComplited} de ${numberOfTasks}`: numberOfTasks}</span></p>      
        </div>
        </div>

        {
        numberOfTasks ?  
        allTasksArray.map(task => <Task key={task.typedTask} handleSetAllTasksArray={handleSetAllTasksArray} task={task} tasks={allTasksArray} handleDeleteTaskOfUser={handleDeleteTaskOfUser} />) : 
        (<aside className={styled.aside}>
          <img src={ImgClipboardText} alt="Clipboard Text" title="Não há nenhum tarefa para fazer" />
  
          <div className={styled.inform}>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>
            Crie tarefas e organize seus itens a fazer
          </p>
          </div>
        </aside>)
        }
        
      </main>
    </>
  )
}