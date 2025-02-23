import { useState } from "react";
import { ListTasks } from "./ListTasks";

export const TodoApp = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [listTasks, setListTasks] = useState<string[]>([]);

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setListTasks((prevListTasks) => [...prevListTasks, newTask.trim()]);
    setNewTask(""); //Limpiar el input después de agregar la tarea
  };

  const handleDelateTasks = (index: number) => {
    // Creamos una copia de la lista de tareas actual
    const updatedTasks = [...listTasks];
    console.log(updatedTasks)
    // Eliminamos la tarea en el índice proporcionado
    updatedTasks.splice(index, 1);
    // Actualizamos el estado con la nueva lista de tareas sin la tarea eliminada
    setListTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Lista de tareas</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nueva Tarea..."
        />

        <button onClick={handleAddTask}>Add</button>
      </div>
      <ListTasks listTasks={listTasks} delateTasks={handleDelateTasks}></ListTasks>
    </div>
  );
};
