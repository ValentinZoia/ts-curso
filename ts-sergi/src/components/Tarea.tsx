

type Props = {
    task:string
    delateTasks: ()=> void
}

export const Tarea = ({task, delateTasks}: Props) => {
  return (
    <div className="task">
        <span>{task}</span>
        <button onClick={delateTasks}>X</button>
    </div>
  )
}