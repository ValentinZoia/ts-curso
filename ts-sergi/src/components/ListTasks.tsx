import { Tarea } from "./Tarea"


type Props = {
    listTasks: string[]
    delateTasks: (index:number) => void
}

export const ListTasks = ({listTasks, delateTasks}: Props) => {
  return (
    <div className="taskList">
        {listTasks.map((task, index)=>(
            <Tarea key={index} task={task} delateTasks={()=>delateTasks(index)}></Tarea>
        ))}

    </div>
  )
}