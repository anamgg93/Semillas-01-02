import { TaskList } from './taskList';



const taskList = new TaskList();

// Agrego tareas

  taskList.addTask({ id: 3, name: 'Terminar tarea 3', completed: false });
  taskList.addTask({ id: 4, name: 'Terminar tarea 4', completed: false });
  taskList.addTask({ id: 5, name: 'Terminar tarea 5', completed: false });

// Imprimo lista de tareas
  taskList.printTasks();

// Marco una tarea completada
  taskList.completeTask(1);

// Elimino otra tarea
  taskList.removeTask(2);

//Lista tareas actualizadas
  taskList.printTasks();


export{}
